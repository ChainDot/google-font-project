import React from "react";

const Options = ({ el, setFontWeight, fontWeight }) => {
  const handleFontOnChange = (e) => {
    setFontWeight(e.target.value);
  };

  return (
    <select
      id="option"
      className="form-select form-select-sm"
      aria-label="form-select-sm example"
      onChange={handleFontOnChange}
      value={fontWeight}
    >
      <option>{`${el.variants.length} variant(s)`}</option>
      {el.variants.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default Options;
