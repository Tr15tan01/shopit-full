
import React from 'react'
import { useContext } from 'react'
import { Loader, Footer, NavBar, ProductCard, HeaderImage } from '../components'


export default function TestPage() {

    return (
        <>
            <HeaderImage />

            <div className="ui container mt-3">
                <div>producspage</div>
            </div>

            <h1 style={{ color: 'grey' }}>This is a Testpage</h1>

            <Footer />
        </>
    )
}
