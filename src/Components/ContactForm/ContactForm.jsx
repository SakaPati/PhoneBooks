import { useRef } from "react";
import { useContacts } from "../ContactsContext/ContactsContext";
import "./ContactForm.css";

export const ContactForm = () => {
  const { addContact } = useContacts();
  const nameRef = useRef(null);
  const numberRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = nameRef.current.value;
    const number = numberRef.current.value;

    const wasAdded = addContact({ name, number });

    if (wasAdded) {
      nameRef.current.value = "";
      numberRef.current.value = "";
      nameRef.current.focus();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="ContactForm">
      <label className="ContactLabel">
        Name
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          ref={nameRef}
          required
        />
      </label>
      <label className="ContactLabel">
        Number
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          ref={numberRef}
          required
        />
      </label>
      <button type="submit">Add contact</button>
    </form>
  );
};
