import React from "react";

const Range = ({ fontSize, setFontSize }) => {
  const handleSizeChange = (e) => {
    if (fontSize < 8 || fontSize > 48) {
      setFontSize("20");
    } else {
      setFontSize(e.target.value);
    }
  };
  // console.log(fontSize);

  return (
    <div className="mb-3">
      <div>
        <label className="fw-bold mb-3 form-label" htmlFor="range">
          La taille de police :
        </label>
        <div className="d-flex">
          <input
            className="form-control form-control-sm mb-3 me-2"
            type="number"
            min="8"
            max="48"
            step="1"
            style={{ width: "3rem", fontWeight: "bold" }}
            value={fontSize}
            onChange={handleSizeChange}
          />
          <p>
            px ou <b>{fontSize / 16}</b> rem
          </p>
        </div>
      </div>

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
      {(fontSize < 8 || fontSize > 48) && (
        <p className="text-danger">Choisir un chiffre entre 8 et 48 px</p>
      )}
    </div>
  );
};

export default Range;
