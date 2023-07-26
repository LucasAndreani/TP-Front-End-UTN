import React, { useEffect, useState } from 'react';
import { useCustomContext } from '../../ContextProvider/ContextProvider'
import './Counter.css'

const Counter = ({initialValue, stock, id}) => {
    const {addProductCart } = useCustomContext ()
    const [quantity, setQuantity] = useState(1)
    return (
        <>
        <div className='add-counter'>
            <div>
                <button onClick={() => setQuantity(quantity >1 ? quantity - 1 : quantity)}>-</button>
                <span>{quantity}</span>
                <button onClick={() => setQuantity(quantity === stock ? quantity : quantity + 1)}>+</button>
            </div>
            <button className='cart-button' onClick={() => addProductCart(id, quantity)}>Add to Cart</button>
        </div>
        </>
)
}

export default Counter