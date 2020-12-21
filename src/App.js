<<<<<<< HEAD
import React from 'react';
import GetValues from './components/middlewareComps/GetValues';



function App() {
  
  return (
    <div className="App">
      <GetValues />
=======
import React from "react";
import Converter from "./components/Converter";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="heading">
        <h1> Number Converter</h1>
        <img
          src="https://www.flaticon.com/svg/static/icons/svg/1016/1016502.svg"
          className="icon"
        />
        <img
          src="https://www.flaticon.com/svg/static/icons/svg/892/892531.svg"
          className="icon"
        />
        <img
          src="https://www.flaticon.com/svg/static/icons/svg/2742/2742041.svg"
          className="icon"
        />
      </div>
      <Converter />
>>>>>>> 17f3e1881fb0d4c12a47281b8cfeefc0da887587
    </div>
  );
}

export default App;
