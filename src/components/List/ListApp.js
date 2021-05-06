import React from "react";
import Card from "./Card";

const ListApp = ({
  data,
  loading,
  error,
  text,
  fontSize,
  setFontSize,
  sort,
}) => {
  const titleSort = () => {
    switch (sort) {
      case "date":
        return "Les plus récentes";
      case "popularity":
        return "Les plus populaires";
      case "trending":
        return "Top 10 trending";
      default:
        throw new Error("error: unknown selection");
    }
  };
  return (
    <div className="col-lg-9">
      <div className="row mb-5">
        <h2 className="mb-3">
          <span className="badge bg-danger" value={sort}>
            {titleSort()}
          </span>
        </h2>
        {loading && <p>Loading in progress...</p>}
        {error && <p>{error}</p>}

        <Card
          data={data}
          text={text}
          fontSize={fontSize}
          setFontSize={setFontSize}
        />
      </div>
    </div>
  );
};

export default ListApp;
