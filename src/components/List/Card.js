import React from "react";

const Card = ({ data, text, fontSize, setFontSize }) => {
  return data.map((el) => {
    return (
      <div key={el.family} className="col-lg-6 mb-4">
        <article>
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
              style={{ fontFamily: `${el.family}`, fontSize: `${fontSize}` }}
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
      </div>
    );
  });
};
export default Card;
