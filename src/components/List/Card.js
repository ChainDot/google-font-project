import React from "react";
import GoogleFontLoader from "react-google-font-loader";

const Card = ({ data, text, fontSize }) => {
  return data.map((el) => {
    return (
      <article key={el.family} className="col-lg-6 mb-4">
        <GoogleFontLoader fonts={[{ font: `${el.family}` }]} />

        <div className="shadow-sm border p-3 h-100">
          <h2 className="h6 d-flex aling-items-center justify-content-between">
            <span>{el.family}</span>
            <small>{`${el.variants.length} variant(s)`}</small>
          </h2>
          <p>
            <span className="badge bg-dark">{el.category}</span>
          </p>
          <p
            className="sample"
            style={{
              fontFamily: `${el.family}`,
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
