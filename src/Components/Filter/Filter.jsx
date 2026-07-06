import { useContacts } from "../ContactsContext/ContactsContext";
import "./Filter.css";

export const Filter = () => {
  const { filter, setFilter } = useContacts();

  const handleChange = (e) => {
    setFilter(e.currentTarget.value);
  };

  return (
    <div>
      <label className="FilterLabel">
        Find contact
        <input type="text" value={filter} onChange={handleChange} />
      </label>
    </div>
  );
};
