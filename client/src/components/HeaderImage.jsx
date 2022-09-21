import React from 'react'

const bigImage = 'https://images.unsplash.com/photo-1657972170499-3376d9eb8f65?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1030&q=80'


export default function HeaderImage() {
    return (
        <div>

            <div style={{
                marginTop: -30,
                height: '45vh',
                backgroundPosition: 'center',
                cursor: 'pointer',
                backgroundSize: 'cover',
                backgroundImage: `url(${bigImage})`
            }}>
                <h1 style={{ color: 'white', paddingTop: '66px' }}>Add To Your Life Anything You Want</h1>
            </div>

        </div>
    )
}
