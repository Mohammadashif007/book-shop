import React from "react";
import list from "../../data";
import Cart from "../Cart/Cart";
import './Amazon.css';

const Amazon = () => {
  console.log(list);
  return (
    <div className="item-container">
      {list.map((item) => (
        <Cart key={item.id} item={item}></Cart>
      ))}
    </div>
  );
};

export default Amazon;
