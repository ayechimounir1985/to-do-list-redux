import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Todo from './Todo'

const TodoLists = () => {
  const Filtre = useSelector(state=> state.TodoReducer.Filtre)
    
    const todos = useSelector(state=> state.TodoReducer.todos)
  return (
    <div>
        {((Filtre =='Done')? todos.filter(el=> el.isDone == true): (Filtre == 'UnDone')? todos.filter(el=> el.isDone == false): todos).map((todo,i)=> <Todo todo={todo} key={i} /> )}
    </div>
  )
}

export default TodoLists
