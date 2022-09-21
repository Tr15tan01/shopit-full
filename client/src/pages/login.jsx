import { useContext, useState } from 'react'
import { AuthContext } from '../context/authContext'
import { useForm } from '../utils/formHook'
import { useMutation } from '@apollo/react-hooks'
import { gql } from 'graphql-tag'
import { Link, useNavigate } from 'react-router-dom'

const LOGIN_USER = gql`
    mutation Mutation(
        $loginInput: LoginInput
    ) {
        loginUser(
            loginInput: $loginInput
        ) {
            email
            username
            token
        }
    }
`

export function Login() {
    const context = useContext(AuthContext)
    const navigate = useNavigate()
    const [errors, setErrors] = useState([])

    function loginUserCallback() {
        console.log('callback hit')
        loginUser()
    }

    const { onChange, onSubmit, values } = useForm(loginUserCallback, {
        email: '',
        password: ''
    })

    const [loginUser, { loading }] = useMutation(LOGIN_USER, {
        update(proxy, { data: { loginUser: userData } }) {
            context.login(userData)
            navigate('/')
        },
        onError({ graphQLErrors }) {
            setErrors(graphQLErrors)
        },
        variables: { loginInput: values }
    })

    return (
        <div className="ui container mt-3 shadow" style={{
            width: '540px',
            padding: '36px'
        }}>
            <h3> Log In To Your Account</h3>
            <form className="ui form" onSubmit={onSubmit}>
                <div className="field">
                    <label>Email</label>
                    <div className="ui left icon input">
                        <i className="user icon"></i>
                        <input type="text" name="email" onChange={onChange} placeholder="Email" />
                    </div>
                </div>
                <div className="field">
                    <label>Password</label>
                    <div className="ui left icon input">
                        <i className="lock icon"></i>
                        <input type="text" name="password" onChange={onChange} placeholder="Password" />
                    </div>
                </div>
                <button className="fluid teal large ui button" type="submit">Submit</button>
            </form>

            <div className="ui message">
                New to us? <Link to="/register">Sign Up</Link>
                <Link to="/" className="mt-3" style={{ margin: '33px' }}>Go To HomePage</Link>
            </div>
            {errors && errors.map(function (error) {
                return <div class="ui red message">{error.message}</div>
            })}
        </div>


        // nre

        // < div className="ui middle aligned center aligned grid" style={{ maxWidth: '450px', margin: 'auto', height: '600px' }
        // }>
        //     <div className="column">
        //         <h2 className="ui teal image header">
        //             <div className="content">
        //                 Log-in to your account
        //             </div>
        //             {
        //                 errors && errors.map(function (error) {
        //                     return <div class="ui red message">{error.message}</div>
        //                 })
        //             }
        //         </h2>
        //         <form className="ui large form" onSubmit={onSubmit}>
        //             <div className="ui stacked segment">
        //                 <div className="field">
        //                     <div className="ui left icon input">
        //                         <i className="user icon"></i>
        //                         <input type="text" name="email" onChange={onChange} placeholder="Email" />
        //                     </div>
        //                 </div>
        //                 <div className="field">
        //                     <div className="ui left icon input">
        //                         <i className="lock icon"></i>
        //                         <input type="text" name="password" onChange={onChange} placeholder="Password" />
        //                     </div>
        //                 </div>
        //                 <div className="ui fluid large teal submit button">Login</div>
        //             </div>

        //             <div className="ui error message">
        //                 {
        //                     errors && errors.map(function (error) {
        //                         return <div class="ui red message">{error.message}</div>
        //                     })
        //                 }
        //             </div>

        //         </form>

        //         <div className="ui message">
        //             New to us? <a href="#">Sign Up</a>
        //         </div>
        //     </div>

        // </div >
    )
}