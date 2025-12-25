import {useState,useEffect} from 'react';

export default function Joker(){

let[joke, setJoke] = useState({});

const URL = "https://official-joke-api.appspot.com/random_joke";

   const getNewJoke = async() =>{
     let response = await fetch(URL);
     let data = await response.json();
     setJoke({setup: data.setup, punchline: data.punchline})
    };


useEffect(()=>{
    async function getFisrtJoke(){
        let response = await fetch(URL);
        let data = await response.json();
        console.log(data);
         setJoke({setup: data.setup, punchline: data.punchline})
    }
    getFisrtJoke();
},[]);




    return (
        <div>
            <h1>Joker Component</h1>
            <h2>{joke.setup}</h2>
            <h3>{joke.punchline}</h3>
            <button onClick={getNewJoke}>Get a new Joke</button>    
        </div>
    );
}
 