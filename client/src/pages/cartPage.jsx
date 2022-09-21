import React from 'react'
import { AuthContext } from '../context/authContext';
import { useContext } from 'react';
import { ProductCard, NavBar } from '../components';


export default function CartPage() {
    // const data = useContext(AuthContext);
    // const data = useContext(AuthContext);
    // data.cart = [{ name: 'katie', age: 23 }]
    const { user, logout, cart } = useContext(AuthContext)
    // console.log(cart)

    if (cart.length < 1) {
        return (
            <>
                <NavBar />
                {
                    user ?
                        <>
                            <h3>{user.email} is logged in</h3>
                        </>
                        :
                        <>
                            <h2>o user data here</h2>
                        </>
                }
                <h3>No Products In The Cart</h3>
            </>
        )
    }

    return (
        <>

            <div>CartPage</div>
            {/* {data.cart && data.cart[0].name} */}
            {
                user ?
                    <>
                        <h3>{user.email} is logged in</h3>
                    </>
                    :
                    <>
                        <h2>o user data here</h2>
                    </>
            }
            <NavBar />
            <div className="ui container mt-3">
                <div>testpage</div>
                <div className="ui three stackable cards">

                    {cart.length && cart.map(item => {
                        return <ProductCard key={item.id}
                            id={item.id}
                            name={item.name}
                            description={item.description}
                            photo={item.photo} />
                    })}

                </div>

            </div>
            {/* <Footer /> */}
        </>

    )
}
