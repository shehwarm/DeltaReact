import "./Product.css";

function Product({title, price, features}) {
 let styles = {backgroundColor: price > 3000 ? "yellow" : ""};
    return(
        <div className="Product" style={styles}>
            <h3>{title}</h3>
            <p>Product description</p>
            <h5>price : {price}</h5>
            <p>{price > 3000? "5%" : ""}</p>
        </div>
    );
} 

export default Product;