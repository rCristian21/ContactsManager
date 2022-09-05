import { useState } from "react";

function AddPersonForm(props) {
  const [person, setPerson] = useState("");

  function handleChange(i) {
    setPerson(i.target.value);
  }
  function handleSubmit(i) {
    props.handleSubmit(person);
    setPerson("");
    i.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add new contact"
        onChange={handleChange}
        value={person}
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default AddPersonForm;
