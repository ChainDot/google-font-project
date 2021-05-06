import React, { useEffect, useState } from "react";
import SelectApp from "./Form/SelectApp";
import ListApp from "./List/ListApp";

const FontApp = () => {
  const options = [
    { label: "date", value: "Les plus récentes" },
    { label: "popularity", value: "Les plus populaires" },
    { label: "trending", value: "Top 10 trending" },
  ];
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [sort, setSort] = useState(options[0].label);
  const [text, setText] = useState(
    "The quick brown fox jumps over the lazy dog  !? 0123456789"
  );
  const [fontSize, setFontSize] = useState("23");
  const url = `https://webfonts.googleapis.com/v1/webfonts?sort=${sort}&key=${process.env.REACT_APP_FONTS_API_KEY}`;

  useEffect(() => {
    setLoading(true);

    fetch(url)
      .then((response) => {
        console.log(response);
        if (!response.ok) {
          throw new Error(`Invalid url ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setData(() => data.items.slice(0, 10));
        console.log(data);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [url]);

  return (
    <div className="row my-3">
      <SelectApp
        data={data}
        error={error}
        loading={loading}
        sort={sort}
        setSort={setSort}
        text={text}
        setText={setText}
        fontSize={fontSize}
        setFontSize={setFontSize}
        options={options}
      />
      <ListApp
        data={data}
        error={error}
        loading={loading}
        text={text}
        setText={setText}
        fontSize={fontSize}
        setFontSize={setFontSize}
        sort={sort}
        options={options}
      />
    </div>
  );
};

export default FontApp;
