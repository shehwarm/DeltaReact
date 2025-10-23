import Product from "./Product.jsx";


function ProductTab(){
   let options = ["htech","durable","lightweight"];
      return (
     <div>
        <Product title="phone" features={options}/>
        <Product title="headphones"/>
        <Product title="tablet"/> 
     </div>
      );
    }

export default ProductTab;