import React, { useEffect, useState } from "react";
import SelectApp from "./Form/SelectApp";
import ListApp from "./List/ListApp";

const FontApp = () => {
  const OPTIONS = [
    { label: "date", value: "Les plus récentes" },
    { label: "popularity", value: "Les plus populaires" },
    { label: "trending", value: "Top 10 trending" },
  ];
  // const reducer = (state, action) => {
  //   switch (action.type) {
  //     case "FETCH_INIT":
  //       return {
  //         ...state,
  //         loading: true,
  //       };
  //     case "FETCH_SUCCESS":
  //       return {
  //         ...state,
  //         loading: false,
  //         data: state.data.items.slice(0, 10),
  //       };
  //     case "FETCH_FAILURE":
  //       return {
  //         ...state,
  //         loading: false,
  //         error: action.payload,
  //       };
  //     case "SET_VALUE":
  //       return {
  //         ...state,
  //         sort: state.sort,
  //         text: state.text,
  //         fontSize: state.fontSize,
  //       };
  //     default:
  //       throw new Error(`Unsupported action type ${action.type}`);
  //   }
  // };
  // const initialState = {
  //   data: [],
  //   error: "",
  //   loading: false,
  //   sort: OPTIONS[0].label,
  //   text: "The quick brown fox jumps over the lazy dog  !? 0123456789",
  //   fontSize: "23",
  // };
  // const [state, dispatch] = useReducer(reducer, initialState);

  // const { data, error, loading, sort, text, fontSize } = state;

  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [sort, setSort] = useState(OPTIONS[0].label);
  const [text, setText] = useState(
    "Portez ce vieux whisky au juge blond qui fume !? 0123456789"
  );
  const [fontSize, setFontSize] = useState("18");

  const url = `https://webfonts.googleapis.com/v1/webfonts?sort=${sort}&key=${process.env.REACT_APP_FONTS_API_KEY}`;

  useEffect(() => {
    setLoading(true);
    // dispatch({ type: "FETCH_INIT" });

    fetch(url)
      .then((response) => {
        //console.log(response);
        if (!response.ok) {
          throw new Error(`Invalid url ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        // dispatch({ type: "FETCH_SUCCESS", payload: data });
        setData(() => data.items.slice(0, 10));
        //console.log(data);
      })
      .catch((error) => {
        // dispatch({ type: "FETCH_FAILURE", payload: error.message });
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [url]);

  return (
    <div className="row my-3">
      <SelectApp
        sort={sort}
        setSort={setSort}
        text={text}
        setText={setText}
        fontSize={fontSize}
        setFontSize={setFontSize}
        OPTIONS={OPTIONS}
      />
      <ListApp
        data={data}
        error={error}
        loading={loading}
        text={text}
        fontSize={fontSize}
        setFontSize={setFontSize}
        sort={sort}
      />
    </div>
  );
};

export default FontApp;
