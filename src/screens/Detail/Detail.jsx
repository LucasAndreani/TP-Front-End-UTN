import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ProductCard, Counter } from '../../Components';
import { useCustomContext } from '../../ContextProvider/ContextProvider';
import './Detail.css'

const Detail = () => {
  const { id } = useParams();
  const {getProductById, addProductCart, isInCart, cart} = useCustomContext()
  const productDetail = getProductById(id)
  const [productIsInCart, setProductIsInCart] = useState(isInCart(id))
  return (
    <div className='detail-container'>
      <div className='detail-product-card'>
      <img src={productDetail.image} width={'150px'}/>
        <h3>{productDetail.name}</h3>
        <p>Type: {productDetail.type.join(', ')}</p>
        <p>Price: ${productDetail.price}</p>
        <p>Stock: {productDetail.stock}</p>
          <Counter initialValue={1} stock={productDetail.stock} id={productDetail.id}/>
          </div>
      <div className='detail-right'>
      <h1>{productDetail.name}</h1>
      <h2>{productDetail.description}</h2>
      </div>
    </div>
  );
};

export default Detail;