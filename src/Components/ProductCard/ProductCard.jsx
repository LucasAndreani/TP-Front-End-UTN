import React from 'react'
import './ProductCard.css'
import { NavLink } from 'react-router-dom'

const ProductCard = ({ product }) => {
return (
    <NavLink to={'/detail/' + product.id} className='product-box'>
        <div className={`product-box ${product.type[0].toLowerCase()}`}>
        <img src={product.image} width={'150px'}/>
        <h3>{product.name}</h3>
        <p>Type: {product.type.join(', ')}</p>
        <p>Price: ${product.price}</p>
    </div>
    </NavLink>
    )
}

export default ProductCard