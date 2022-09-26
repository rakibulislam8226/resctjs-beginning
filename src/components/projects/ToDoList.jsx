import React from 'react';
import { BsFillTrashFill } from 'react-icons/bs';

const ToDoList = (props) => {
    
  return (
    <div className='todo_style'>
    
    <li><p><BsFillTrashFill onClick={()=>{props.onSelect(props.id)}}/></p>{props.text}</li>
    </div>
  )
}
// style={{color: "red", fontSize: "30px"}}

export default ToDoList