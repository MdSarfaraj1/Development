import { createSlice ,nanoid} from '@reduxjs/toolkit'
const initialState={
    todos:[{id:"abc",task:"demo-task",isDone:false}]
}

export const todoSlice=createSlice({
 name:"todo",
 initialState,
 reducers:{  // state,action
    addTodo:(state,action)=>{
        const newTodo={
            id:nanoid(),
            task:action.payload,
            isDone:false
        }
        state.todos.push(newTodo);
    },
    deleteTodo:(state,action)=>{
        state.todos=state.todos.filter((todo)=>todo.id!=action.payload);
    },
    markAsDone:(state,action)=>{
       state.todos=state.todos.map((todo)=>
        todo.id === action.payload ? { ...todo, isDone: true } : todo
        );
    }
 }
});
export const {addTodo,deleteTodo,markAsDone}=todoSlice.actions;
export default todoSlice.reducer  //todoSlice.reducer is a function that combines all the reducers you defined in the reducers property into a single reducer functio

