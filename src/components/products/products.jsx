import React from 'react'
import "./products.css"

export default function Products(props) {
  return (
    <div className="product">
      <img className="prod-img" src={props.img} alt="image"></img>

      <p className='product-price'>
        <small>$</small>
        <strong>{props.price}</strong>
      </p>

      <p>⭐⭐⭐</p>

      <p className='product-info'>{props.info}</p>

      <button className='btn'>Add to Cart</button>

    </div>
  )
}
