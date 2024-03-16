
import './App.css';
import Parent from './components/Parent1'
import React, { useState } from "react";
import UserFetch from './components/Userfetch'

function App() {

  

  const [counter, setCounter] = useState(0);

  const handleClick1 = () => {
      
      setCounter(counter + 1);
  };
const handleClick2 = ()=>{
  setCounter(counter -1)
}



 return(
  
  <>
  <Parent/>
  <button  onClick={handleClick1}>Increament</button>
  <button  onClick={handleClick2}>decreament</button>
  <div>{counter}</div>
  <UserFetch/>
  </>

 )

  
 }


export default App;
