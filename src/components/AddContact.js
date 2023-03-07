import React, { useState } from 'react';

function AddContact({ onAddContact }) {
  const [newContact, setNewContact] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (newContact.trim() === '') {
      return;
    }
    onAddContact(newContact.trim());
    setNewContact('');
  }

  const handleChange = (event) => {
    setNewContact(event.target.value);
  }

  return (
    <div>
      <h2>Pedido</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" value={newContact} onChange={handleChange} />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default AddContact;
