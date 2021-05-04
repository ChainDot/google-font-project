import React from "react";

const Range = ({ fontSize, setFontSize }) => {
  const handleSizeChange = (e) => {
    setFontSize(e.target.value);
  };
  console.log(fontSize);
  return (
    <div className="mb-3">
      <label className="fw-bold mb-3 form-label" htmlFor="range">
        La taille de police
      </label>
      <input
        type="range"
        className="form-range"
        id="range"
        min="8"
        max="48"
        step="1"
        value={fontSize}
        onChange={handleSizeChange}
      />
    </div>
  );
};

export default Range;
