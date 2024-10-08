import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';
export default function Todo(){
    let [arr,setArr]=useState([{key:uuidv4(),task:'sample',mark:false}]);
    let [newTask,setNewTask]=useState('');
    function addTask(){
        if(newTask!=''){
            setArr((preArr)=>{
                return [...preArr,{task:newTask,key:uuidv4(),mark:false}]
            })
        setNewTask(newTask='');
        }
        
    }
    function trackChange(event){
        setNewTask(()=>{
            newTask=event.target.value;
        })
    }
    function deleteTAsk(id){
        let newa=arr.filter((task)=>task.key!=id)
        setArr(newa)
    }
    function markTask(id){
        setArr((prevArr)=>prevArr.map((task)=>{
                if(task.key==id) {
                   
                    return{...task,mark:!task.mark}}
                return task
            }))
            
    }
    return (
        <div className="todo">
            <input type="text" placeholder="add a task" value={newTask} onChange={trackChange}/> 
            <button onClick={addTask}>Add</button>
            <br></br><br></br>
            <h3> Task to do</h3>
            <ul>
                {
                    arr.map((todo)=>(
                        <li key={todo.key}>
                            <span style={{ textDecoration: todo.mark ? 'underline' : 'none' }}>{todo.task}</span>
                             &nbsp;&nbsp;&nbsp;
                            <button onClick={()=>deleteTAsk(todo.key)}>delete</button>&nbsp;&nbsp;&nbsp;
                            <button onClick={()=>markTask(todo.key)}>Mark As {todo.mark ? 'Undone' : 'Done'}</button>
                            <br></br> <br></br>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}