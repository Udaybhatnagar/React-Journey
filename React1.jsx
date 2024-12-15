import './App.css'
import {useState} from "react";

export default function App() {
  const [count,setCount]=useState(2);//hook

  function OnClickHandler(){
    setCount(count+1);
    
  }
  return (
    <div>
      <button onClick={OnClickHandler}>Counter {count} </button>
    </div>
  )
}
