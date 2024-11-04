import { useState,useCallback, useEffect } from 'react'


function App() {
 const [length,setLength]=useState(5);
 const [number,setNumber]=useState(false);
 const [character,setCharecter]=useState(false);
 const [Password,setPassword]=useState("");
  
 const passwordGenerator=useCallback(()=>{
  let pass="";
  let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  console.log("hi")
  if(number) str+="1234567890"
  if(character) str+="!@#%&*?";
  for(let i=1;i<=length;i++){
    let char=Math.floor(Math.random()*str.length+1)
    pass+=str.charAt(char);
  }
  setPassword(pass)
 },[length,number,character,setPassword])

 useEffect(()=>{passwordGenerator()},[passwordGenerator])
  return (
    <>
      <div className=' w-full my-8 px-4 py-4 max-w-md mx-auto rounded-lg text-orange-500 bg-gray-700 shadow-md' >
      
        <div className="flex shadow rounded-lg mb-4 overflow-hidden">
        
        <input type='text' 
        className='outline-none w-full py-1 px-3'
        value={Password} readOnly placeholder='password'></input>
        <button className='bg-blue-300'>Copy</button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input type='range' min={5} max={16} id='range' value={length} onChange={(e)=>{setLength(e.target.value) 
      
            }}></input>
            <label htmlFor="range">Length({length})</label>
          </div>
          <div className="flex">
            <input type='checkbox' defaultChecked={number} onChange={()=>{setNumber((prev)=>!prev)}} id='number'></input>
            <label htmlFor='number'>Number</label>
          </div>
          <div className="flex">
            <input type='checkbox' defaultChecked={character} onChange={()=>{setCharecter((prev)=>!prev)}} id='character'></input>
            <label htmlFor='character'>Character</label>
          </div>
        </div>
     
      </div>
    </>
  )
}

export default App