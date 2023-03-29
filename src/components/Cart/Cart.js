import React from 'react';
import './Cart.css';

const Cart = ({item}) => {
    const {title, author, price, img} = item;
    return (
        <div className='cart'>
            <img src={img} alt="" />
            <h3>{title}</h3>
            <p>{author}</p>
            <p>Price : ${price}</p>
            <button>Add To Cart</button>
        </div>
    );
};

export default Cart;