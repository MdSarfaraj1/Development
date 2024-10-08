import { useState } from "react"
export default function LudoBoard(){
    let [moves,setMoves]=useState({blue:0,red:0,yellow:0,green:0});
    function incBlue(color){
        setMoves((prevMoves)=>{
            return {...prevMoves,[color]:prevMoves[color]+1} //**** */ creating new instance of moves and updating blue's value.
        // as we are  accesing the filds of moves object via a variable so we have to use [] otherwise if we just use color:preMoves.color+1 then it will
        // create new field named as color
        });
    }
    return(
        <div className="LudoBoard">
            <h1>Game begins</h1>
            <p >Blue Moves:{moves.blue}</p>
            <button style={{backgroundColor:'blue'}} onClick={()=>incBlue('blue')}>+1</button> 
            {/* if we just write onClick={incBlue('blue')} then it will executed just after rendering and only once as () is there */}
            <p>Green Moves:{moves.green}</p>
            <button style={{backgroundColor:'green'} } >+1</button>
            <p>REd Moves:{moves.red}</p>
            <button style={{backgroundColor:'red'}}>+1</button>
            <p>Yelllow Moves:{moves.yellow}</p>
            <button style={{backgroundColor:'yellow', color:'BLACK'}}>+1</button>
        </div>
    )
}
//****Whether you're updating an object or an array, use immutable methods (like spreading)
// to ensure React can correctly identify and handle state changes.

// () => incBlue('blue') in line 13 creates a function that calls incBlue('blue') when executed. 
//This ensures that the function runs only when the button is clicked.