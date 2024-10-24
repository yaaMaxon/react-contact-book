import ContactItem from "../ContactItem/ContactItem";
import { getContacts, deleteContact} from "../../services/api";
import { useEffect, useState } from "react";


const ContactList = () => {
    const [contacts, setContacts] = useState([])

    const getContactsReq = async () => {
        const contacts = await getContacts()

        setContacts(contacts)
    } 

    const deleteContactReq = async (id) => {
        await deleteContact(id)
        await getContactsReq()
  }

    useEffect(() => {
        getContactsReq()
  }, [])

  return <ul className="flex flex-wrap justify-center gap-2.5">
   {contacts && contacts.map((contact) => <ContactItem key={contact.id} contact={contact} onDelete={deleteContactReq} id={contact.id}/>)}
  </ul>
}

export default ContactList;