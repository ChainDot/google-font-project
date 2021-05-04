import React from "react";

const MenuSelect = ({ sort, setSort, options }) => {
  const handleOptionChange = (e) => {
    setSort(e.target.value);
  };

  return (
    <div>
      <label className="fw-bold mb-2" htmlFor="sort">
        Afficher des polices
      </label>
      <select
        id="sort"
        className="form-select mb-4"
        onChange={handleOptionChange}
        value={sort}
      >
        {options.map((option) => (
          <option key={option.label} value={option.label}>
            {option.value}
          </option>
        ))}
      </select>
    </div>
  );
};

export default MenuSelect;
