import React, { useState } from "react";

function Item({ name, category }) {
  const [isCart, setIsCart] = useState(false);

  function handleCart() {
    setIsCart( !isCart);
  }
const condition =isCart ? "in-cart" : ""
const condition2 =isCart ? "remove" : "add"
  return (
    <li className={condition}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button
        className={condition2}
        onClick={handleCart}
      >
        {isCart ? "Remove From" : "Add to"} Cart
      </button>
    </li>
  );
}

export default Item;