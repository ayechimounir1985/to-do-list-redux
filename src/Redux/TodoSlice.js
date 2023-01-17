import { createSlice } from "@reduxjs/toolkit";

const TodoSlice = createSlice({
    name:'todo',
    initialState:{
        todos: [{
            id: Math.random(),
            task : 'Learn React',
            isDone: false
        }],
        Filtre : 'All'
    },

    reducers:{
        AddTodos : (state,action)=>{
            state.todos.push(action.payload)
        },
        DeleteTodo : (state,{type,payload})=>{
            state.todos = state.todos.filter(el=>el.id != payload)
        },
        ToggleTodo : (state, {type,payload})=>{
            state.todos.map(el=> (el.id == payload)? el.isDone = !el.isDone : el.isDone)
        },
        UpdateTodo : (state,{type,payload})=>{
            state.todos.map(el=>(el.id == payload.id)? el.task = payload.task : el)
        },
        FilterByDone: (state)=>{
            state.Filtre = 'Done'
        },
        FilterByUnDone: (state)=>{
            state.Filtre = 'UnDone'
        },
        FilterByAll: (state)=>{
            state.Filtre = 'All'
        }
    }
}) 

export default TodoSlice.reducer
export const {AddTodos,DeleteTodo,ToggleTodo,UpdateTodo,FilterByDone,FilterByUnDone,FilterByAll} = TodoSlice.actions
