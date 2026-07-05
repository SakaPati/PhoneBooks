import { ContactListItem } from "../ContactListItem/ContactListItem";
import "./ContactList.css";

export const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul className="ContactList">
      {contacts.map(({ id, name, number }) => (
        <ContactListItem key={id} id={id} name={name} number={number} onDeleteContact={onDeleteContact} />
      ))}
    </ul>
  );
};
