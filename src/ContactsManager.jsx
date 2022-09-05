import { useState } from "react";
import AddPersonForm from "./AppPersonForm";
import PeopleList from "./PeopleList";



function ContactsManager(props) {
    const [contacts, setContacts] = useState(props.data)

    function addPerson(name) {
        setContacts([...contacts, name])
    }

    return ( 
        <div>
            <AddPersonForm handleSubmit={addPerson}/>
            <PeopleList data={contacts}/>
        </div>
     );
}

export default ContactsManager;