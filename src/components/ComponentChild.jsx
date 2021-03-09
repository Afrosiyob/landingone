import React, { useEffect, useReducer } from "react";
import ComponentRef from "./ComponentRef";

import CounterOne from "./CounterOne";
import DocTitleOne from "./DocTitleOne";
import HookTimer from "./HookTimer";

const INIT_STATE = {
  getLoading: false,
  error: "",
  data: [],
};

const reducer = (state, { type, payload }) => {
  switch (type) {
    case "GET_DATA":
      return { ...state, getLoading: true };

    case "GET_DATA_SUCCESS":
      return { ...state, getLoading: false, data: payload };

    case "GET_DATA_ERROR":
      return { ...state, getloading: false, error: payload };

    default:
      return { ...state };
  }
};

const ComponentChild = () => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  useEffect(() => {
    dispatch({ type: "GET_DATA" });

    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((json) => dispatch({ type: "GET_DATA_SUCCESS", payload: json }))
      .catch((error) => dispatch({ type: "GET_DATA_ERROR", payload: error }));
  }, []);

  console.log(state);

  return (
    <div>
      <CounterOne />
      <ComponentRef />
      <HookTimer />
      <DocTitleOne />
    </div>
  );
};

export default ComponentChild;
