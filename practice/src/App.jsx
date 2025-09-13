import ProductCard from "./ProductCard.jsx";

import './App.css';

import { useState } from 'react';
function App() {

  const [count, setCount] = useState(0);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const[formData, setFormData] = useState({
    username: " OG",
    password: " SUJEETH"
  });
  const handleIncrement = () => {
    //SetCount(count + 1);
    setCount((prevCount) => prevCount + 1);
    console.log(count); 
  }
  const  handleemialChange = (e) => {
    setEmail(e.target.value);
  }
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }
  const handleClick = () => {
    console.log("Button clicked!");
    alert("access denied");
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Email: ${email}, Password: ${password}`);  

  }
  const handleChange = (e) => {
    console.log(e.target.name);
    console.log(e.target.value);
  }
  

  return (
    <div>
      <p>{count}</p>
      
      <form onSubmit={handleSubmit}>
        <input type="text" name="username" placeholder="username" onChange={handleemialChange} />
        <input type="password" name="password" placeholder="password" onChange={handlePasswordChange} />
        <button type="submit">Submit</button>
      </form>
      <button onClick={handleIncrement}>Increment</button>
    
      
    </div>
  );
}

export default App;
