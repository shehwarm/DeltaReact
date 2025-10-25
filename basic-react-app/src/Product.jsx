import "./Product.css";
import Price from "./Price.jsx";

function Product({ title, idx }) {
  let oldPrices = ["12,456", "5,999", "45,000", "899"];
  let newPrices = ["10,999", "4,499", "39,999", "799"];
  let description = [
    ["Intuitive surface", "Programmable"],
    ["High quality sound", "Non-programmable"],
    ["Lightweight and fast", "High performance"],
    ["Durable material", "Reliable connection"],
  ];

  return (
    <div className="Product">
      <h4>{title}</h4>
      <p>{description[idx][0]}</p>
      <p>{description[idx][1]}</p>
      <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]} />
    </div>
  );
}

export default Product;
