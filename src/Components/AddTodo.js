import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { AddTodos } from '../Redux/TodoSlice'


const AddTodo = () => {
    const dispatch = useDispatch()
    const [newTodo, setNewTodo] = useState('')
  return (
    <div style={{display:'flex', margin:'15px 0px',gap:'10px'}}>
         <Form.Control value={newTodo} onChange={(e)=> setNewTodo(e.target.value)} style={{width:'300px'}} type="text" placeholder="enter task " />
         <Button onClick={()=>{dispatch(AddTodos({
            id: Math.random(),
            task : newTodo,
            isDone: false 
         }))
         setNewTodo('')
        }
         
         } variant="light">Add</Button>

    </div>
  )
}

export default AddTodo