export default function Cart() {
  let cartList = ["Tomatoes", "Pasta"];
  return (
    <div>
      <h4 className="title">Cart</h4>
      {cartList.map((cartProduct, i) => {
        return <CartItem item={cartProduct} />;
      })}
      <Banner cardName="Master" />
      <Banner cardName="AMAX" />
    </div>
  );
}

function Banner(props) {
  return <h5>{props.cardName} card is on no interest event now!</h5>;
}

function CartItem(props) {
  return (
    <div className="cart-item">
      <p>product name: {props.item}</p>
      <p>$40</p>
      <p>1</p>
    </div>
  );
}
