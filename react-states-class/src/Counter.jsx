import { useState,useEffect } from "react"

export default function Counter() {

 let [countx,setCountx]=useState(0);
let [county,setCounty]=useState(0);

let incCountx=()=>{
  setCountx(countx+1);
}

let incCounty=()=>{
  setCounty(county+1);
}

 useEffect(function printSomething(){
    console.log("Component Mounted or Updated");
 },[countx]);

  return (
    <div>
      <h1>Count X: {countx}</h1>
      <button onClick={incCountx}>Increment Count X</button>
      <h1>Count Y: {county}</h1>
      <button onClick={incCounty}>Increment Count Y</button>
    </div>
  )
} 