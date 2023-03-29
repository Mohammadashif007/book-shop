import React from "react";
import list from "../../data";
import Cart from "../Cart/Cart";
import './Amazon.css';

const Amazon = ({handleClicked}) => {
  return (
    <div className="item-container">
      {list.map((item) => (
        <Cart key={item.id} item={item} handleClicked={handleClicked}></Cart>
      ))}
    </div>
  );
};

export default Amazon;
