import { Component } from "react";

const loremImg1 = "https://picsum.photos/200/300";

let currentDate = new Date(); //2020, 5, 5, 12//
currentDate = currentDate.getHours();
let message = "";
const cssStyle = {};

if (currentDate >= 1 && currentDate <= 11) {
  message = "Good Morning";
  cssStyle.color = "green";
} else if (currentDate >= 12 && currentDate <= 19) {
  message = "Good Noon";
  cssStyle.color = "blue";
} else {
  message = "Good Night";
  cssStyle.color = "red";
}

// if else condition again start //


const MySuject = () => {
    const subject = "math";
  // ternary operator
//   <>
//     <h2>Ternary operator</h2>
//     {subject === "math" ? (
//       <h1>This is math.</h1>
//     ) : (
//       <h2>This is another subject.</h2>
//     )}
//   </>;
  if (subject==='bangla') {
      return (<h1>This is math.</h1>)}
  else{
      return (<h2>This is another subject.</h2>)
      }
};
// if else condition again end //

class JsxAll extends Component {
  render() {
    return (
      <>
        <h3 contentEditable="True">Some JSX files:</h3>
        <a
          href="https://www.youtube.com/watch?v=OloAP8p1k1w&list=PLwGdqUZWnOp3aROg4wypcRhZqJG3ajZWJ&index=14"
          target="_rakib"
        >
          <img src={loremImg1} alt="loremimg" />
          <h4>Now hour is {currentDate} </h4>
        </a>
        <h4>
          Hello <span style={cssStyle}> {message}</span>
        </h4>
        <MySuject />
      </>
    );
  }
}
export default JsxAll;
