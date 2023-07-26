import React from 'react'

const ProductCartCard = ({ product }) => {
return (
    <div className='product-box-two'>
        <img src={product.image} width={'150px'}/>
        <h3>{product.name}</h3>
        <p>Price: ${product.price}</p>
        <p>In Cart: {product.quantity}</p>
    </div>
)
}

export default ProductCartCard