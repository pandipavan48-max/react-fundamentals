import ProductCard from "./ProductCard.jsx"
import Greetings from "./Greetings.jsx"
function App() {
  
  return (
    <>
      <ProductCard />
      <Greetings receivedName="John Doe" age={25} />
    </>
  )
} 

export default App
