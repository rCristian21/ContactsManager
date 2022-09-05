import React from "react";
import ReactDOM from "react-dom";
import "./style.css";
import ContactsManager from "./ContactsManager";

const contacts = ["James Smith", "Thomas Anderson", "Cristian"];

ReactDOM.render(<ContactsManager data={contacts} />, document.getElementById("root"));
