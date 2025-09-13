import ProductCard from "./ProductCard.jsx";
import  "./ProductCard.css"
import './App.css';


function App() {
  const product = {
   productname: " NAME:Pavan",
    bloodgroup: " BLOOD GROUP:O+",
    DOB: " DATE OF BIRTH:21/04/2005",
    RollNO: " ROLL NO:23VV1A0542",


  return (
    <div>
      <ProductCard productname={product.productname} bloodgroup={product.bloodgroup} DOB={product.DOB} RollNO={product.RollNO} photoUrl={product.photoUrl} />
    </div>
  );   
}


export default App;