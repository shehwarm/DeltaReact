import Product from "./Product.jsx";


function ProductTab(){
   let options = [<li>"htech"</li>,<li>"durable"</li>,<li>"lightweight"</li>];
      return (
     <div>
        <Product title="phone" features={options}/>
        <Product title="headphones"/>
        <Product title="tablet"/> 
     </div>
      );
    }

export default ProductTab;