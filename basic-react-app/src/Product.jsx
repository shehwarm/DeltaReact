import "./Product.css";

function Product({title}) {
    
    return(
        <div className="Product">
            <h3>{title}</h3>
            <p>Product description</p>
        </div>
    );
}

export default Product;