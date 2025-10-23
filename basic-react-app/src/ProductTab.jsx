import Product from "./Product.jsx";


function ProductTab(){
   let options = [<li>htech</li>, <li>durable</li>, <li>lightweight</li>];
      return (
     <div>
        <Product title="phone" price={4000}/>
        <Product title="headphones" price={1000}/>
        <Product title="tablet" price={2000}/> 
     </div>
      );
    }

export default ProductTab;