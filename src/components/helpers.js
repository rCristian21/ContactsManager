export function onDeleteContact(contact, contacts, setContacts) {
  const newContacts = contacts.filter((c) => c !== contact);
  setContacts(newContacts);
}
