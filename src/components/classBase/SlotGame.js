import { useState } from "react";

const SlotM = () => {
  const [count, setCount] = useState(0); //inital number

  const IncNum = () => {
    setCount(count + 1); //incriment value

  
  };
  const SlotGame = (props) => {
    // let x = '😄';
    // let y = '😄';
    // let z = '🥪';
    
    // let x=props.x;
    // let y=props.y;
    // let z=props.z;
    let { x, y, z}=props;

    if ((x === y && y === z )) {
      return(
      <>
        <h1>{x}{y}{z}</h1>
        <h1>Matching</h1>
      </>
      );
      
    }
    else{
      return(
        <>
          <h1>{x}{y}{z}</h1>
          <h1>Not Matching</h1>
        </>
        );
    }

  };

  return (
    <>
      <h1>{count}</h1>
      <button onClick={IncNum}>Click Me</button>
      <div>
      <hr/>
      <h1 style={{textAlign:"center"}}>🎰 Slot maching game. 🎰 </h1>

        <SlotGame x = "😄" y = '🥭' z = '🍌'/>
        <SlotGame x = '😒' y = '😄' z = '🍎'/>
        <SlotGame x = "😄" y = '😄' z = '😄'/>
      </div>
    </>
  );
};
export default SlotM;
