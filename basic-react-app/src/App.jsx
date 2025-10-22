import "./App.css"

import Title from "./Title.jsx"; 

function Description(){
  return <h1>I am the Description</h1>;
}

function App() {
  return (
     <div>
         <h1>this is my app</h1>
        <Title />
        <Description />
     </div>
  )
}

export default App
