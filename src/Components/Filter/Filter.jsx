import "./Filter.css";

export const Filter = ({ value, onChange }) => {
  return (
    <div>
      <label className="FilterLabel">
        Find contact
        <input type="text" value={value} onChange={onChange} />
      </label>
    </div>
  );
};
