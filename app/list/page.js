"use client";

import { useState } from "react";

export default function List() {
  let products = ["Tomatoes", "Pasta", "Coconut"];
  // useState -> auto rendering reflecting its change!
  let [stockList, useStockList] = useState([0, 0, 0]);

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
                let stockListCopy = [...stockList];
                if (stockListCopy[i] === 0) return;
                // change helper(change value)
                stockListCopy[i]--;
                useStockList(stockListCopy);
              }}
            >
              -
            </button>
            <span> {stockList[i]} </span>
            <button
              onClick={() => {
                let stockListCopy = [...stockList];
                // change helper(change value)
                stockListCopy[i]++;
                useStockList(stockListCopy);
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
