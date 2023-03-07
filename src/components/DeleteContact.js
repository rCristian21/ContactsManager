import React from 'react';

function DeleteContact({ contacts, onDeleteContact }) {
  return (
    <div>
      <h2>List</h2>
      <ul>
        {contacts.map((contact, index) => (
          <li key={index}>
            {contact}
            <button onClick={() => onDeleteContact(contact)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DeleteContact;

