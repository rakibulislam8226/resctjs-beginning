import React, { useState } from 'react';
const Forms=()=>{
    const [name, setName]= useState("");
    const inputEvent=(event) =>{
        setName(event.target.value);
    };

    const [fullName, setfullName] = useState();
    const onSubmit=(event) =>{
        setfullName(name);
    };

    
    return(
        <>
            <h1>Hello {fullName}</h1>
            <input placeholder="Enter Your name..." onChange={inputEvent}></input> <br/><br/>
            <button type="submit" onClick={onSubmit}>Click Me 👍</button>
        </>
    );
} 
export default Forms;