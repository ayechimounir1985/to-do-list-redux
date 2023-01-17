import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { DeleteTodo, ToggleTodo, UpdateTodo } from '../Redux/TodoSlice'



const Todo = ({todo}) => {
    const [isEdited, setIsEdited] = useState(false)
    const [updatedTask, setUpdatedTask] = useState('')
    const dispatch = useDispatch()

  return (
    <div style={{display:'flex',justifyContent:'center', gap: '15px'}}>
            {isEdited? <input onChange={(e)=> setUpdatedTask(e.target.value)} defaultValue={updatedTask}/> : <h3 style={{width:'300px',textDecoration: todo.isDone? 'line-through' : ''}}>{todo.task}</h3>
}
            <Button onClick={()=> dispatch(DeleteTodo(todo.id))} style={{margin:'10px'}} variant="danger">Delete</Button>
            <Button onClick={()=> dispatch(ToggleTodo(todo.id))} style={{margin:'10px'}} variant={todo.isDone? 'danger':"warning"}>{todo.isDone? 'UnDone' : 'Done'}</Button>
            <Button onClick={()=>{
                setIsEdited(!isEdited)
                setUpdatedTask(todo.task)
                isEdited && dispatch(UpdateTodo({id:todo.id,
                task:updatedTask
                }))
            }} style={{margin:'10px'}} variant="primary">Update</Button>
        </div>
  )
}

export default Todo
