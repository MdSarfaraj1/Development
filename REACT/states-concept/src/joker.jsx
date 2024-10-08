import { useEffect, useState } from "react";

let jokeUrl="https://official-joke-api.appspot.com/random_joke"
export default function Joker(){
    let [joke,setJoke]=useState({setup:"",punchline:""});
    const getJoke=async()=>{
        let response=await fetch(jokeUrl);
        console.log(response);
        let jsonResponse=await response.json();
        setJoke({setup:jsonResponse.setup,punchline:jsonResponse.punchline});
    }
    useEffect(()=>{
       async function getJoke(){
            let response=await fetch(jokeUrl);
            console.log(response);
            let jsonResponse=await response.json();
            setJoke({setup:jsonResponse.setup,punchline:jsonResponse.punchline});
        }
        getJoke();
    },[]);
    return(
        <div>
        <p>Joker</p>
        <h2>{joke.setup}</h2>
        <h3>{joke.punchline}</h3>
        <button onClick={getJoke}>Get joke</button>
        </div> 
        
    )
}