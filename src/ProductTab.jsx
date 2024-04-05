import Product from "./product.jsx";

function ProductTab(){
let styles={
   display:"flex",
   flexWrap:"wrap",
   justifyContent:"center",
   alignItems:"center"
};
 return (
  <div style={styles}>

  <Product title="logitech MX Master" idx={0}/>
  <Product title="Apple Pencil (2nd gen)" idx={1} />
  <Product  title="Zebronic Zeb-Transformer" idx={2}/> 
  <Product  title="Petronics Tod-23" idx={3}/> 
  </div>
  );
}

export default ProductTab;