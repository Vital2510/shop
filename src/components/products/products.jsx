import React from 'react';
import './products.css'; 
function products() {
  return <div className="product">
    <div className="product__info">
        <p>Apple 2020 MacBook Air Laptop M1 Chip, 13" Retina Display, 8GB RAM, 256GB SSD Storage, Backlit Keyboard, FaceTime HD Camera, Touch ID. Works with iPhone/iPad; Space Gray</p>
        
        <p className="product__price">
            <small>$</small>
            <strong>1,599.00</strong>
        </p>
        
        <div className='product__rating'>
            <p>🌟🌟🌟</p>
        </div>
    </div>
    <img src="https://m.media-amazon.com/images/I/61u8pBTLD6L.__AC_SY300_SX300_QL70_FMwebp_.jpg" alt="" />
    <button>Add to Cart</button>
  </div>


    ;
}
export default products;