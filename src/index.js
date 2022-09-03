import React from "react";
import ReactDOM from "react-dom";
import "./style.css";
import Counter from './Counter'

const el = <Counter />; 
ReactDOM.render(
  el, 
  document.getElementById('root')
);