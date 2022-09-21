import React, { useContext, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/authContext'
import { gql, useQuery } from '@apollo/client';

export default function NavBar() {

    const navigate = useNavigate()
    const { user, logout } = useContext(AuthContext)

    const onLogout = () => {
        logout()
        navigate('/')
    }
    console.log({ user })

    const GET_CATEGORIES = gql`
    query categories {
      categories {
        category
      }
    }
  `;

    const { loading, error, data } = useQuery(GET_CATEGORIES);


    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;

    //make categories unique
    const extractUniqueCategories = () => {
        const newCategories = []
        //extract item category from array of objects and push to new array
        data.categories.forEach(item => {
            newCategories.push(item.category)
            return newCategories
        })
        //make array of unique items
        const uniqueCategories = Array.from(new Set(newCategories))
        return uniqueCategories
    }

    extractUniqueCategories()

    //night mode

    const toggleNightMode = () => {
        console.log('night mode activated')
        document.body.classList.toggle('dark')
        // const card = document.querySelector('.card')
        // console.log(card)
        // card.classList.toggle('dark')
    }

    return (
        <div className="ui container fluid">

            <div className="ui secondary teal inverted  menu">
                <Link className="active item" to="/">
                    Home
                </Link>
                <Link className="item" to="/products">
                    products
                </Link>
                <Link className="item" to="/cms">
                    Admin
                </Link>

                <div className="dropdown">
                    <button className="dropbtn">Dropdown</button>
                    <div className="dropdown-content">
                        {/* add extracted unique categories to dropdown */}
                        {/* todo: All items must have link property */}
                        {extractUniqueCategories().map(item => {
                            return <Link key={item} to="#">{item}</Link>
                        })}
                    </div>
                </div>
                <div className="ui toggle checkbox" style={{
                    margin: '12px'
                }}>
                    <input type="checkbox" name="public" onChange={toggleNightMode} />
                    <label>Night Mode</label>
                </div>
                <div className="right menu">
                    <div className="item">
                        <div className="ui icon input">
                            <input type="text" placeholder="Search..." />
                            <i className="search link icon"></i>
                        </div>
                    </div>

                    <Link className="ui active item" to="/cart">
                        <span style={{ paddingRight: '15px' }}>cart</span>
                        <i className="cart icon m-3"></i>
                        <div className="ui red label m-3">22</div>
                    </Link>
                    {user ? (<Link className="ui  item" to="/" onClick={onLogout}>
                        Logout
                    </Link>) :
                        (<Link className="ui  item" to="/login" onClick={onLogout}>
                            Login
                        </Link>)
                    }

                </div>
            </div>
        </div >
    )
}
