import { useState,useEffect } from "react"

export default function Counter() {

 let [count,setCount]=useState(0);

 useEffect(function printSomething(){
    console.log("Component Mounted or Updated");
 });

  return (
    <div>
      <h3> Count = {count}</h3>
      <button onClick={()=>setCount(count+1)}>Increment</button>
    </div>
  )
} 