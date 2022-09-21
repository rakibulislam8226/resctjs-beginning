import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Buttonclass from './components/classBase/Buttonclass';
import ButtonCheck  from './components/functionBase/ButtonCheck';
import DateAndTime from './components/DateTime';
import NetflixSeries from './components/classBase/NetflixSeries';
import ArithmeticLogic from './components/classBase/Arithmetic';
import JsxAll from './components/classBase/JsxAll';
import name,{myname,fevname} from "./components/functionBase/ES6"
import Condition from './components/functionBase/Condition'
import SlotM from './components/classBase/SlotGame';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App /><br/>

    {/* components */}
    <ButtonCheck />  <br/><br/>
    <Buttonclass /> <br/>
    <DateAndTime /> <hr/>
    <NetflixSeries />
    <ArithmeticLogic />
    <JsxAll /> <hr/>

    {name}
    <ol>
      <li>{fevname}</li>
      <li>{myname()}</li>
    </ol>
    <hr/>
    
    <h2>All the cards are below using condition.</h2>
    <Condition />
    <hr/>
    <SlotM />
    
    
    


  </React.StrictMode>
);
