import Image from "next/image";

export default function List() {
  let products = ["Tomatoes", "Pasta", "Coconut"];

  return (
    <div>
      <h4 className="title">Product List</h4>
      {products.map((product, i) => {
        return (
          <div className="food" key={i}>
            <img src={`food${i}.png`} className="food-img" />
            <h4>{product} $40</h4>
          </div>
        );
      })}
    </div>
  );
}
