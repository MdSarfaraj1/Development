import { useSelector,useDispatch } from "react-redux";
import { removeTodo, updateTodo } from "../features/todo/todoSlice";

function Todos(){
    const todos=useSelector(state=>state.todos)
    const dispatch=useDispatch()
    return(
        <>
            <div>
                {todos.map((todo)=>(
                   <li key={todo.id}>{todo.text}
                    <button onClick={()=>dispatch(removeTodo(todo.id))}>Delete</button>
                    </li>
                ))}
            </div>
        </>
    )

}
export default Todos