import React from 'react'
import { Link } from 'react-router-dom'


export default function ProductCard(props) {

    const goToProduct = (props) => {
        console.log('product name is', props.name)
    }

    return (
        <div className="card" >
            <div className="blurring dimmable image">
                <div className="ui inverted dimmer">
                    <div className="content">
                        <div className="center">
                            <div className="ui primary button">Add Friend</div>
                        </div>
                    </div>
                </div>
                <div className="image" style={{
                    height: '240px',
                    backgroundPosition: 'center',
                    cursor: 'pointer',
                    backgroundSize: 'cover',
                    backgroundImage: `url(${props.photo})`
                }} >
                    {/* <img width="100%" height={240} src={props.photo} alt={props.description} /> */}

                </div>

            </div>
            <div className="content">
                <Link className="header" to="/">{props.name}</Link>
                <div className="meta">
                    <span className="date">{props.description}</span>
                </div>
            </div>
            <div className="extra content">
                <h3>
                    <i className="tags icon" ></i>
                    price: <span className="ui orange label" style={{ color: 'teal', marginLeft: '24px', fontSize: '1.2rem' }}>233  ₾</span>
                </h3>

            </div>
            <div className="content">
                <button className="ui teal button">Add to Cart</button>
                <Link to="/product" state={{ ...props }}><button className="ui red button" onClick={() => goToProduct(props)}>View Closer</button></Link>
            </div>
        </div >
    )
}
