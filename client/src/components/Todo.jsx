import { useContext, useState } from 'react'
import { AuthContext } from '../context/authContext'
import { useForm } from '../utils/formHook'
// import { useMutation } from '@apollo/react-hooks'
// import { gql } from 'graphql-tag'
import { gql, useMutation } from '@apollo/client';
import { useNavigate } from 'react-router-dom'



// function loginUserCallback() {
//     console.log('callback hit')
//     loginUser()
// }
const ADD_TODO = gql`
   mutation Mutation($todoInput: TodoInput) {
  addTodo(todoInput: $todoInput) {
    text
  }
}
  `;

export function AddTodo() {
    let input;
    const [addTodo, { data, loading, error }] = useMutation(ADD_TODO);
    const [text, setText] = useState('')

    if (loading) return 'Submitting...';
    if (error) return `Submission error! ${error.message}`;

    return (
        <div>
            <form
                onSubmit={e => {
                    e.preventDefault();
                    addTodo({ variables: { todoInput: { text } } });
                    console.log(text)
                    setText('');
                }}
            >
                {/* <input
                    ref={node => {
                        input = node;
                    }}
                /> */}
                <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
                <button type="submit">Add Todo</button>
            </form>
        </div>
    );
}