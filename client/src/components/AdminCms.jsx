import { useContext, useState } from 'react'
import { AuthContext } from '../context/authContext'
import { useForm } from '../utils/formHook'
import { useMutation } from '@apollo/react-hooks'
import { gql } from 'graphql-tag'
import { useNavigate } from 'react-router-dom'

const CREATE_PRODUCT = gql`
   mutation Mutation($productInput: ProductInput) {
  createProduct(productInput: $productInput) {
    id
    name
    description
    photo
    category
    createdAt
  }
}
`

export function AdminCms() {
    // const context = useContext(AuthContext)
    const navigate = useNavigate()
    const [errors, setErrors] = useState([])

    function createProductCallback() {
        console.log('callback hit')
        createProduct()
    }

    const { onChange, onSubmit, values } = useForm(createProductCallback, {
        name: '',
        description: '',
        photo: '',
        category: ''
    })

    const [createProduct, { loading }] = useMutation(CREATE_PRODUCT, {
        // update(proxy, { data: { createProduct: productData } }) {
        //     context.login(productData)
        //     // navigate('/')
        // },
        onError({ graphQLErrors }) {
            setErrors(graphQLErrors)
        },
        variables: { productInput: values }
    })

    return (
        <div className="ui container mt-3">
            <form className="ui form" onSubmit={onSubmit}>
                <div className="field">
                    <label>Name</label>
                    <input type="text" name="name" onChange={onChange} placeholder="Name" />
                </div>
                <div className="field">
                    <label>Description</label>
                    <input type="text" name="description" onChange={onChange} placeholder="Description" />
                </div>
                <div className="field">
                    <label>Photo</label>
                    <input type="text" name="photo" onChange={onChange} placeholder="Photo Url" />
                </div>
                <div className="field">
                    <label>Category</label>
                    <input type="text" name="category" onChange={onChange} placeholder="Category" />
                </div>
                <button className="fluid teal large ui button" type="submit">Submit</button>
            </form>
            {errors && errors.map(function (error) {
                return <div className="ui red message">{error.message}</div>
            })}
        </div>
    )
}