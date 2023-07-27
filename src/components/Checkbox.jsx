import { useState } from "react";

const Checkbox = ({ id, text, value = false }) => {
  const [selected, setSelected] = useState(value);

  return (
    <div>
      <input
        type="checkbox"
        id={id}
        value={selected}
        onChange={(e) => setSelected(e.target.checked)}
        checked={selected}
      />
      <label htmlFor={id}>
        {text} - {selected ? "Selected" : "No selected"}
      </label>
    </div>
  );
};

export default Checkbox;
