import React,{useState,useContext} from "react";
import USerContext from "../context/userContext";
function Login(){
    const [username,setUsername]=useState('')
    const [password,setPassword]=useState('')
    const  {setUser}=useContext(USerContext)

    const handleSubmit=(e)=>{
        e.preventDefault()
        setUser(username)
    }
    return(
        <div>
            <h2>Login</h2>
            <input type="text" placeholder="username" value={username} onChange={(e)=>setUsername(e.target.value)}></input>    
            <input type="text" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)}></input>
            <button onClick={handleSubmit}>Submit</button>
            
        </div>
    )
}
export default Login