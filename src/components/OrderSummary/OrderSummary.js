import React, { useState } from "react";

const OrderSummary = ({ cart, setCart }) => {
  const [price, setPrice] = useState();
  return (
    <div>
      {cart?.map((item) => {
        <div className="order-container" key={item.id}>
          <div className="order-img">
            <img src={item.img} alt="" />
            <p>{item.title}</p>
          </div>
          <div className="order-btn">
            <button>-</button>
            <button>+</button>
          </div>
          <div>
            <p>{item.price}</p>
            <button>Remove</button>
          </div>
        </div>;
      })}
      <div>
        <h2>Total Price of your cart</h2>
        <h3>BDT = {price}</h3>
      </div>
    </div>
  );
};

export default OrderSummary;
