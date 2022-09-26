import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// import name,{myname,fevname} from "./components/functionBase/ES6";
import NavScrollExample from './navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <NavScrollExample />
    <App />
    <br/>
    {/* components */}

    {/* {name}
    <ol>
      <li>{fevname}</li>
      <li>{myname()}</li>
    </ol> */}
    

  </React.StrictMode>
);
