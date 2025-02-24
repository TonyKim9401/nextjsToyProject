import Hello from "./data.js";

export default function Cart() {
  return (
    <div>
      <h4 className="title">Cart</h4>
      <Hello />
      <CartItem />
    </div>
  );
}

function CartItem() {
  return (
    <div className="cart-item">
      <p>product name</p>
      <p>$40</p>
      <p>1</p>
    </div>
  );
}
