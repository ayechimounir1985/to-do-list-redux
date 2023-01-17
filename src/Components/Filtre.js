import React from 'react'
import { Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { FilterByAll, FilterByDone, FilterByUnDone } from '../Redux/TodoSlice'

const Filtre = () => {
    const dispatch = useDispatch()
  return (
    <div style={{display:'flex', justifyContent:'center',gap:'15px'}}>
        <Button onClick={()=> dispatch(FilterByDone())} variant="success">Done</Button>
        <Button onClick={()=> dispatch(FilterByAll())} variant="light">All</Button>
        <Button onClick={()=> dispatch(FilterByUnDone())} variant="danger">UnDone</Button>
    </div>
  )
}

export default Filtre