export const ContactListItem = ({ id, name, number, onDeleteContact }) => {
  return (
    <li className="ContactItem">
      {name}: {number}
      <button type="button" onClick={() => onDeleteContact(id)}>
        Delete
      </button>
    </li>
  );
};
