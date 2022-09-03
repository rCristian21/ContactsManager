import React from "react";
import ReactDOM from "react-dom";
import "./style.css";
import Counter from './Counter'
import Converter from "./Converter";

const el = <Converter />; 
ReactDOM.render(
  el, 
  document.getElementById('root')
);