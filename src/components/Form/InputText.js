import React from "react";

const InputText = ({ text, setText }) => {
  const handleTextChange = (e) => {
    setText(e.target.value);
  };
  return (
    <div className="mb-3">
      <label className="fw-bold mb-3 form-label" htmlFor="text">
        Tapez votre text
      </label>
      <textarea
        id="text"
        className="form-control"
        onChange={handleTextChange}
        value={text}
      ></textarea>
    </div>
  );
};

export default InputText;
