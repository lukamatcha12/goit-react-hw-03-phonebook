import './ContactList.css'
import {ContactListItem} from './ContactListItem';

export const ContactList = ({ contacts, onDeleteContact }) => {
    return (
      <ul>
      {contacts.map(contact => (
        <ContactListItem key={contact.id} contact={contact} onDeleteContact={onDeleteContact} />
      ))}
    </ul>
    );
  };