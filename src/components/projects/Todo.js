import React, { useState } from "react";
import ToDoList from "./ToDoList";
// import "./sytle.css"

const Todo = () => {
  const [name, setName] = useState("");
  const [fullName, setfullName] = useState([]);
  const itemEvent = (event) => {
    setName(event.target.value);
  };

  const listOfItems = () => {
    setfullName((oldItems) => {
      return [...oldItems, name];
    });
    setName("");
  };

  const deleteItem = (id) =>{
    console.log("Deleted");

    setfullName((oldItems)=>{
      return oldItems.filter(( arrEle, index ) => {
        return index !==id;
      });
    });
  };

  return (
    <div className="main_div">
      <div className="center_div">
        <br />
        <h1>Todo List</h1>
        <br />
        <input type="text" placeholder="Add a Item" onChange={itemEvent} />
        <button onClick={listOfItems}> + </button>

        <ol>
          {fullName.map((itemval, index) => {
            return <ToDoList text={itemval} key= {index} id= {index} onSelect={deleteItem}/>
          })}
        </ol>
      </div>
    </div>
  );
};

export default Todo;
