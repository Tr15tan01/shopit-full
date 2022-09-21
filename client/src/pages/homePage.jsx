import { useQuery } from '@apollo/client'
import gql from 'graphql-tag'
import React from 'react'
import { useContext } from 'react'
import { Loader, Footer, NavBar, ProductCard, HeaderImage } from '../components'
import { AuthContext } from '../context/authContext'


export default function HomePage() {

    const GET_PRODUCTS = gql`
       query products {
           products {
           id
           name
           description
           photo
  }
}
`;
    const { user, logout } = useContext(AuthContext)
    const { loading, error, data } = useQuery(GET_PRODUCTS);

    if (loading) return <Loader />;
    if (error) return `Error! ${error.message}`;

    const trimmedProducts = data.products.slice(1, 4)

    return (
        <>
            <HeaderImage />
            <NavBar />

            <div className="ui container mt-3">
                <div>producspage</div>
                <div className="ui three stackable cards">
                    {trimmedProducts.map(item => {
                        return <ProductCard key={item.id}
                            id={item.id}
                            name={item.name}
                            description={item.description}
                            photo={item.photo} />
                    })}

                </div>
            </div>

            <h1 style={{ color: 'grey' }}>This is a Homepage</h1>
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
            <Footer />
        </>
    )
}
