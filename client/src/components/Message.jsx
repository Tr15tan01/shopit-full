import { useContext, useState } from 'react'
import { AuthContext } from '../context/authContext'
import { useForm } from '../utils/formHook'
// import { useMutation } from '@apollo/react-hooks'
// import { gql } from 'graphql-tag'
import { gql, useMutation } from '@apollo/client';
import { useNavigate } from 'react-router-dom'

const CREATE_MESSAGE = gql`
     mutation Mutation($messageInput: MessageInput) {
  createMessage(messageInput: $messageInput) {
    text
  }
}
`

export function Messages() {
    const context = useContext(AuthContext)
    const navigate = useNavigate()
    const [errors, setErrors] = useState([])

    // function loginUserCallback() {
    //     console.log('callback hit')
    //     loginUser()
    // }
    const [createMessage, { data, loading, error }] = useMutation(CREATE_MESSAGE, {
        variables: {
            test: 'android is nice',
            username: 'uis'
        }
    });

    // const { onChange, onSubmit, values } = useForm(loginUserCallback, {
    //     email: '',
    //     password: ''
    // })

    if (loading) return 'Submitting...';
    if (error) return `Submission error! ${error.message}`;


    return (
        <div className="ui container mt-3">
            <form className="ui form" onSubmit={e => {
                e.preventDefault();
                createMessage({ variables: { sext: 'humber', username: 'deacula' } });
                console.log({ data })
            }}>
                <div className="field">
                    <label>Email</label>
                    <input type="text" name="text" placeholder="text" />
                </div>
                <div className="field">
                    <label>Password</label>
                    <input type="text" name="user" placeholder="Username" />
                </div>
                <button className="fluid teal large ui button" type="submit">Submit</button>
            </form>
            {errors && errors.map(function (error) {
                return <div class="ui red message">{error.message}</div>
            })}
        </div>
    )
}