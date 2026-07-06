import { createContext, useContext, useState, useEffect, useMemo } from "react";
import { nanoid } from "nanoid";

const ContactsContext = createContext(null);

const initialContacts = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];

export const ContactsProvider = ({ children }) => {
  const [contacts, setContacts] = useState(() => {
    const saved = localStorage.getItem("contacts");
    return saved ? JSON.parse(saved) : initialContacts;
  });
  const [filter, setFilter] = useState("");

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const addContact = ({ name, number }) => {
    const isDuplicate = contacts.some((contact) => contact.name.toLowerCase() === name.toLowerCase());

    if (isDuplicate) {
      alert(`${name} is already in contacts`);
      return false;
    }

    const contact = { id: nanoid(), name, number };
    setContacts((prev) => [...prev, contact]);
    return true;
  };

  const removeContact = (id) => {
    setContacts((prev) => prev.filter((contact) => contact.id !== id));
  };

  const visibleContacts = useMemo(() => {
    const normalize = filter.toLowerCase();
    return contacts.filter(({ name }) => name.toLowerCase().includes(normalize));
  }, [contacts, filter]);

  const value = {
    contacts,
    visibleContacts,
    filter,
    setFilter,
    addContact,
    removeContact,
  };

  return <ContactsContext.Provider value={value}>{children}</ContactsContext.Provider>;
};

export const useContacts = () => {
  const ctx = useContext(ContactsContext);
  if (!ctx) {
    throw new Error("useContacts must be used within a ContactsProvider");
  }
  return ctx;
};
