import React, { useState } from 'react';

const DigitalTime=()=>{
    let time=new Date().toLocaleTimeString()
    const[ctime, setcCtime]= useState(time);
    const updateTime = () => {
        time=new Date().toLocaleTimeString()
        setcCtime(time);
    };
    setInterval(updateTime,1000) //it update the time in every seconds

    return (
        <>
        <div>
            <h1>{ctime}</h1>
        </div>
        </>
    );
}

export default DigitalTime;