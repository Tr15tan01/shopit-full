import React, { useContext } from 'react'
import { gql, useQuery } from '@apollo/client';
import { Link, useLocation } from 'react-router-dom'
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import SimilarProducts from '../components/SimilarProducts';
import { AuthContext } from '../context/authContext';
import { useState } from 'react';

export default function Product() {

  // const data = useContext(AuthContext);

  const [cartItem, setCartItem] = useState('')


  const location = useLocation()
  console.log(location.state)
  const { name, photo, description } = location.state
  const { user, logout, cart } = useContext(AuthContext)
  const addToCart = () => {
    console.log('added to cart' + name)
    cart.push({ name, photo, description })
    // data.cart.push({ name: 'nini' })
    console.log(cart, 'is cart')
    setCartItem(cart[0].name)
  }



  return (
    <>
      <div className="ui padded grid stackable" >
        <NavBar />
        <div className="eight wide column">
          <div className="shadow" style={{
            // marginTop: -30,
            height: '60vh',
            backgroundPosition: 'center',
            cursor: 'pointer',
            backgroundSize: 'cover',
            backgroundImage: `url(${photo})`
          }}>

          </div>
        </div>
        <div className="eight wide column" >
          {/* tetsing */}
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
          <h3>The data is added to cart {cartItem}</h3>
          <h1>Product: {name}</h1>
          <h1 className="ui medium header">Price:<span className="ui orange large label"> 1212</span></h1>
          <h3>Description</h3>
          <p>{description}</p>
          <button className="ui red button" onClick={addToCart}>Add To Cart</button>
          <button className="ui teal button">Buy Right Now</button>
          <hr />
          <Link to="/products" className=""><button className="ui green button" >Go To All Products</button></Link>
        </div>
      </div>
      {/* similar products here */}
      <SimilarProducts />
      <Footer />
    </>
  )
}
