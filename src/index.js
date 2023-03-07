import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import AddContact from "./components/AddContact";
import DeleteContact from "./components/DeleteContact";
import "./style.css"

/* const initialContacts = ["James Smith", "Thomas Anderson", "Bruce Wayne"];
 */
function findIndex(contacts, name) {
  return contacts.findIndex((contact) => contact === name);
}

function App() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetch()
      .then(response => response.text())
      .then(data => {
        const contactsList = data.split('\n').filter(Boolean);
        setContacts(contactsList);
      })
      .catch(error => console.error(error));
  }, []);

  const handleAddContact = (name) => {
    setContacts([...contacts, name]);
  };

  const handleDeleteContact = (name) => {
    const index = findIndex(contacts, name);
    if (index !== -1) {
      setContacts([...contacts.slice(0, index), ...contacts.slice(index + 1)]);
    }
  };

  return (
    <div>
      <h1>El arepero Mayor</h1>
      <AddContact onAddContact={handleAddContact} />
      <DeleteContact
        contacts={contacts}
        onDeleteContact={handleDeleteContact}
      />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));