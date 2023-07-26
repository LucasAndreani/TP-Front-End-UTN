import React from 'react'
import './Cart.css'
import { useCustomContext } from '../../ContextProvider/ContextProvider'
import { ProductCartCard } from '../../Components'
import { NavLink } from 'react-router-dom';

const Cart = () => {
    const {cart, getTotal} = useCustomContext()

        return (
            <div className='cart-container'>
            {cart.length === 0 ? (
                <div className='empty-cart-section'>
                <img className='cart-icon' src='https://cdn-icons-png.flaticon.com/512/1068/1068729.png'></img>
                <h2 className='empty-cart-message'>Your cart is empty...</h2>
                <NavLink to='/HomePage'>
                    <button className='explore-products-button'>Explore Products</button>
                </NavLink>
                
            </div>
            ) : (
                <div>
                {cart.map((product) => (
                    <ProductCartCard key={product.id} product={product} />
                    
                ))} <h2 className='total-value'> ${getTotal()} </h2> 
                    <button className='buy-button'>Buy</button> 
                </div>
            )}
            </div>
        );
        };

export default Cart