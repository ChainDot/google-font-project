import React from "react";
import InputText from "./InputText";
import MenuSelect from "./MenuSelect";
import Range from "./Range";

const SelectApp = ({
  sort,
  setSort,
  setText,
  text,
  fontSize,
  setFontSize,
  options,
}) => {
  return (
    <div className="col-lg-3 mb-4">
      <div style={{ position: "sticky", top: "0px" }}>
        <MenuSelect sort={sort} setSort={setSort} options={options} />
        <InputText text={text} setText={setText} />
        <Range fontSize={fontSize} setFontSize={setFontSize} />
      </div>
    </div>
  );
};

export default SelectApp;
