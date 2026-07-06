import { ContactForm } from "./Components/ContactForm/ContactForm";
import { ContactsProvider } from "./Components/ContactsContext/ContactsContext";
import { ContactList } from "./Components/ContactList/ContactList";
import { Filter } from "./Components/Filter/Filter";
import "./App.css";

export const App = () => {
  return (
    <ContactsProvider>
      <div>
        <h1>Phonebook</h1>
        <ContactForm />

        <h2 style={{ textAlign: "start" }}>Contacts</h2>
        <Filter />
        <ContactList />
      </div>
    </ContactsProvider>
  );
};
