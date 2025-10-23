import "./Product.css";

function Product({title, price, features}) {

    return(
        <div className="Product">
            <h3>{title}</h3>
            <p>Product description</p>
            <h5>price : {price}</h5>
            <p>{price > 3000? "5%" : ""}</p>
        </div>
    );
} 

export default Product;