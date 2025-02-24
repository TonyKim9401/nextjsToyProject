export default function List() {
  let products = ["Tomatoes", "Pasta", "Coconut"];

  return (
    <div>
      <h4 className="title">Product List</h4>
      {products.map((product) => {
        return (
          <div className="food">
            <h4>{product} $40</h4>
          </div>
        );
      })}
    </div>
  );
}
