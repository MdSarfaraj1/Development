import React, { useState } from 'react'
import { addTodo } from '../features/todo/todoSlice'
import {useDispatch} from 'react-redux' 
function AddTodo(){
    const dispatch=useDispatch()
const [Input,setInput]=useState("")
const add=(e)=>{
    e.preventDefault()
    if(Input=="") return
    dispatch(addTodo(Input))
    setInput("")


}

    return(
        <form onSubmit={add}>
            <input onChange={(e)=>setInput(e.target.value)} value={Input} placeholder='Enter a text' type='text'/>
            <button type='submit'>Add</button>
        </form>
    )
}

export default AddTodo