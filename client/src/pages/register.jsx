import { useContext, useState } from 'react'
import { AuthContext } from '../context/authContext'
import { useForm } from '../utils/formHook'
import { useMutation } from '@apollo/react-hooks'
import { gql } from 'graphql-tag'
import { Link, useNavigate } from 'react-router-dom'

const REGISTER_USER = gql`
    mutation Mutation(
        $registerInput: RegisterInput
    ) {
        registerUser(
            registerInput: $registerInput
        ) {
            email
            username
            token
        }
    }
`

export function Register() {
    const context = useContext(AuthContext)
    const navigate = useNavigate()
    const [errors, setErrors] = useState([])

    function registerUserCallback() {
        console.log('callback hit')
        registerUser()
    }

    const { onChange, onSubmit, values } = useForm(registerUserCallback, {
        username: '',
        email: '',
        password: '',
        confirmpassword: ''
    })

    const [registerUser, { loading }] = useMutation(REGISTER_USER, {
        update(proxy, { data: { registerUser: userData } }) {
            context.login(userData)
            navigate('/')
        },
        onError({ graphQLErrors }) {
            setErrors(graphQLErrors)
        },
        variables: { registerInput: values }
    })

    return (
        <div className="ui container mt-3 shadow" style={{
            width: '540px',
            padding: '36px'
        }}>
            <h3> Sign Up To New Account</h3>
            <form className="ui form" onSubmit={onSubmit}>
                <div className="field">
                    <label>Username</label>
                    <div className="ui left icon input">
                        <i className="user icon"></i>
                        <input type="text" name="username" onChange={onChange} placeholder="First Name" />
                    </div>
                </div>
                <div className="field">
                    <label>Email</label>
                    <div className="ui left icon input">
                        <i className="mail icon"></i>
                        <input type="text" name="email" onChange={onChange} placeholder="Last Name" />
                    </div>
                </div>
                <div className="field">
                    <label>Password</label>
                    <div className="ui left icon input">
                        <i className="lock icon"></i>
                        <input type="text" name="password" onChange={onChange} placeholder="Last Name" />
                    </div>
                </div>
                <div className="field">
                    <label>Confirm Password</label>
                    <div className="ui left icon input">
                        <i className="lock icon"></i>
                        <input type="text" name="confirmpassword" onChange={onChange} placeholder="Last Name" />
                    </div>
                </div>
                <div className="field">
                    <div className="ui checkbox">
                        <input type="checkbox" tabIndex="0" />
                        <label>I agree to the Terms and Conditions</label>
                    </div>
                </div>
                <button className="fluid teal large ui button" type="submit">Submit</button>
            </form>
            <div className="ui message">
                Have An Account? <Link to="/login">Log In</Link>
                <Link to="/" className="mt-3" style={{ margin: '33px' }}>Go To HomePage</Link>
            </div>
            {errors && errors.map(function (error) {
                return <div class="ui red message">{error.message}</div>
            })}
        </div>
    )
}