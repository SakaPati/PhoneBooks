import { useContacts } from "../ContactsContext/ContactsContext";

export const ContactListItem = ({ id, name, number }) => {
  const { removeContact } = useContacts();

  return (
    <li className="ContactItem">
      {name}: {number}
      <button type="button" onClick={() => removeContact(id)}>
        Delete
      </button>
    </li>
  );
};
