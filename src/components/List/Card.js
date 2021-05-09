import React, { useState } from "react";
import GoogleFontLoader from "react-google-font-loader";
import Variants from "./Variants";

const Card = ({ data, text, fontSize }) => {
  const [fontWeight, setFontWeight] = useState("");
  //console.log(fontWeight);
  return data.map((el) => {
    return (
      <article key={el.family} className="col-lg-6 mb-4">
        <GoogleFontLoader
          fonts={[{ font: `${el.family}`, weights: [`${fontWeight}`] }]}
        />

        <div className="shadow-sm border p-3 h-100 rounded">
          <h2 className="h5 d-flex aling-items-center justify-content-between">
            <span>{el.family}</span>
            <span>
              <Variants
                el={el}
                fontWeight={fontWeight}
                setFontWeight={setFontWeight}
              />
            </span>
          </h2>
          <p className="h5">
            <span className="badge bg-dark">{el.category}</span>
          </p>
          <p
            className="sample"
            style={{
              fontFamily: `${el.family}`,
              fontWeight: `${fontWeight}`,
              fontSize: `${fontSize}px`,
            }}
          >
            {text}
          </p>
          <a
            rel="noopener noreferrer"
            target="_blank"
            className="text-danger"
            href={`https://fonts.google.com/specimen/${el.family}`}
          >
            Voir sur Google Fonts (ouvre un nouveau tab)
          </a>
        </div>
      </article>
    );
  });
};
export default Card;
