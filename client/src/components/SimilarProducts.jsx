import React from 'react'


// all these will be fetched from database

const image1 = "https://images.unsplash.com/photo-1659536019078-361c92fbfdf6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
const image2 = "https://images.unsplash.com/photo-1662245386768-ea093d834256?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
const image3 = "https://images.unsplash.com/photo-1662128680429-a04fdd7e6b95?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"

const similars = [
    { name: 'name 1', image: image1 },
    { name: 'name 2', image: image2 },
    { name: 'name 3', image: image3 },
]

// end of dummy data

export default function SimilarProducts() {
    return (
        <div className="ui padded three column grid">
            {similars.map(item => {
                return (
                    <div key={item.name} className="column shadow">
                        <div className="ui fluid card">
                            <div className="image" style={{
                                // marginTop: -30,
                                height: '24vh',
                                backgroundPosition: 'center',
                                cursor: 'pointer',
                                backgroundSize: 'cover',
                                backgroundImage: `url(${item.image})`
                            }}>

                            </div>
                            <div className="content">
                                <p className="header">{item.name}</p>
                            </div>
                        </div>
                    </div>

                )
            })}


        </div>
    )
}
