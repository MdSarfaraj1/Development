import { useState } from "react";
export default function Counter(){
    let [count,setCount]=useState(0); // initialixzing state variable count=0 , setCount is the updater for count variable
    // if passing a function inside useState  ,dont call it means just write the function name without ()
    // if dont do so the function will be called each time when things are re rerenderred
    console.log(`updated value of ${count}`);  // 
    function inccount(){
    setCount((currCount)=>{ //*** */
     return  currCount+1;
    });
    setCount((currCount)=>{
      return  currCount+1;
     });
    console.log(`previous value of ${count}`);
   
  }

    return (
        <div >
            <button onClick={inccount}>increase count</button>
            <h1>{count}</h1> 
        </div>
       
    )
}

// value of count wil be increased when the whole code wil be re render .
//immediately after calling setCount(count + 1), the count variable still holds its 
//previous value within the current function scope. The state update will be reflected in the
// next render cycle, not instantly within the same function.



//****To ensure that each state update is based on the most recent state, you should use the
// functional updater form of setState. This form accepts a function that receives the 
//current state and returns the new state. This guarantees that each update works with the latest state, 
//even when multiple updates are queued.