import React from 'react'
import { gql, useQuery } from '@apollo/client';

import { Loader, Footer, NavBar, ProductCard, HeaderImage } from '../components'

export default function ProducsPage() {

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
  const { loading, error, data } = useQuery(GET_PRODUCTS);

  // if (loading) return 'Loading...';
  if (loading) {
    return (
      <>
        <h3>Loading...</h3>
        <Loader />
      </>
    )
  }

  if (error) return `Error! ${error.message}`;
  // console.log(data)

  return (
    <>
      <HeaderImage />
      <NavBar />
      <div className="ui container mt-3">
        <div>producspage</div>

        <div className="ui three stackable cards">
          {data.products.map(item => {
            return <ProductCard key={item.id}
              id={item.id}
              name={item.name}
              description={item.description}
              photo={item.photo} />
          })}

        </div>
      </div>
      <Footer />
    </>
  )
}
