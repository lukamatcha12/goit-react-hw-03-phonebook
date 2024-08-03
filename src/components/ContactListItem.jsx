
export const ContactListItem =  ({ contact, onDeleteContact })  => {
    return (
      <li>
        {contact.name}: {contact.number}
        <button onClick={() => onDeleteContact(contact.id)}>Delete</button>
      </li>
    );
  };