import React from 'react';

function PeopleList({ contacts }) {
  return (
    <ol>
      {contacts.map((contact, index) => (
        <li className="list-item" key={index}>{contact}</li>
      ))}
    </ol>
  );
}

export default PeopleList;
