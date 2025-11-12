import { useState } from "react";

function init() {
  console.log("Init function called");
  return Math.random();
}

export default function Counter() {
  const [count, setCount] = useState(init());
  console.log("Counter rendered");

  const incCount = () => {
   // setCount((currCount) => {
   //   return currCount + 1;
   // });
   // setCount((currCount) => {
   //   return currCount + 1;
    //});
    setCount(1);
  };

  return (
    <div>
      <h3>Count = {count}</h3>
      <button onClick={incCount}>Increase Count</button>
    </div>
  );
}
 