import { useState } from "react"
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";
export default function Form(){
    const [task,setTask]=useState("");
    const dispatch=useDispatch();
    function handleSubmit(event){
        event.preventDefault();
        dispatch(addTodo(task));
        setTask("");
// give which reducer function is to call inside dispatch and inside the action give the data going to be store inide the action.payload
    }
    return(
        <>
        <form onSubmit={handleSubmit}>
            <input type="text" onChange={(event)=>setTask(event.target.value)} value={task}></input>
            <button type="submit">Add Task</button>
        </form>
        </>
    )
}