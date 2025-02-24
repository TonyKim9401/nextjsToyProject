"use client";

import { useState } from "react";

export default function List() {
  let products = ["Tomatoes", "Pasta", "Coconut"];
  // useState -> auto rendering reflecting its change!
  let [stock, useStock] = useState(0);

  return (
    <div>
      <h4 className="title">Product List</h4>
      {products.map((product, i) => {
        return (
          <div className="food" key={i}>
            <img src={`food${i}.png`} className="food-img" />
            <h4>{product} $40</h4>
            <button
              onClick={() => {
                if (stock === 0) return;
                // change helper(change value)
                useStock(stock - 1);
              }}
            >
              -
            </button>
            <span> {stock} </span>
            <button
              onClick={() => {
                // change helper(change value)
                useStock(stock + 1);
              }}
            >
              +
            </button>
          </div>
        );
      })}
    </div>
  );
}
