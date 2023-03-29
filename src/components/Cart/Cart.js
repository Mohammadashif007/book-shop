import React from 'react';
import './Cart.css';

const Cart = ({item, handleClicked}) => {
    const {title, author, price, img} = item;
    return (
        <div className='cart'>
            <img src={img} alt="" />
            <h3>{title}</h3>
            <p>{author}</p>
            <p>Price : ${price}</p>
            <button onClick={() => handleClicked(item)}>Add To Cart</button>
        </div>
    );
};

export default Cart;