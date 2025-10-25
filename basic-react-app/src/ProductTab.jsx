import Product from "./Product.jsx";


function ProductTab(){
   let styles = {
         display: "flex",
         flexWrap :"wrap",
         justifyContent: "center",
         alignItems: "center",
   };
      return (
      
      <div>
         <h2 style={{textAlign:"center"}}>Product List</h2>
   
        
     <div style={styles}>
        <Product title="Logitech Master" idx={0} />
        <Product title="headphones" idx={1} />
        <Product title="tablet Pro" idx={2} /> 
        <Product title="Iphone cable"idx={3} /> 
     </div>
       </div>
      );
    }

export default ProductTab;