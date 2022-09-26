import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DigitalTime from "./components/classBase/DigitalTime";
import NetflixSeries from "./components/classBase/NetflixSeries";
import SlotM from "./components/classBase/SlotGame";
import Condition from "./components/functionBase/Condition";
import ArithmeticLogic from "./components/classBase/Arithmetic";
import ThreeDot from "./components/classBase/ThreeDot";
import Forms from "./components/classBase/Forms";
import JsxAll from "./components/classBase/JsxAll";
import Home from "./components/classBase/home";
import Error from "./components/classBase/Error";
import Todo from "./components/projects/Todo";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Error />} />
        <Route path="/home" element={<Home />} />
        <Route path="/etc" element={<div>Etc working.</div>} />
        <Route path="/digital_time" element={<DigitalTime />} />
        <Route path="/netflix" element={<NetflixSeries /> } />
        <Route path="/slot" element={<SlotM /> } />
        <Route path="/condition" element={<Condition /> } />
        <Route path="/aruthmetic" element={<ArithmeticLogic /> } />
        <Route path="/three_dot" element={<ThreeDot /> } />
        <Route path="/forms" element={<Forms /> } />
        <Route path="/jsxall" element={<JsxAll /> } />
        <Route path="/todo" element={<Todo /> } />
        {/* <Link to="/about" em<JsxAll />/> */}

      </Routes>
    </BrowserRouter>
  );
}

export default App;
