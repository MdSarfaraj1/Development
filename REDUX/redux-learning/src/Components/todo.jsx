import { useSelector } from "react-redux"
import Form from "./AddForm";
import { useDispatch } from "react-redux";
import { deleteTodo, markAsDone } from "../features/todo/todoSlice";
export default function Todo(){
    const todos=useSelector((state)=>state.todos);
    const dispatch=useDispatch();
    function handleDelete(id){
       dispatch(deleteTodo(id))
    }
    function handleDone(id){
        dispatch(markAsDone(id));
    }
    return (
        <div className="todo">
            <Form/>
            <h2>Todo</h2>
            <ul>
                {todos.map((todo)=>(
                    <li key={todo.id}>
                        {todo.isDone?<u>{todo.task}</u>:todo.task} &nbsp;&nbsp;&nbsp;
                        <button onClick={()=>handleDelete(todo.id)}>delete</button> &nbsp;&nbsp;&nbsp;
                        <button onClick={()=>handleDone(todo.id)}>Mark as Done</button>
                    </li>
                   
                    ))}
              
            </ul>
        </div>

    )
}