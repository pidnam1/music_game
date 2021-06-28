import "./App.css";
import React, { useState, useEffect } from "react";
import Settings from "./Components/Settings";
import FetchButton from "./Components/FetchButton";
import Question from "./Components/Question";
import { useSelector, useDispatch } from "react-redux";

function App() {
  let fetched = useSelector((state) => state.fetched);

  console.log("Fetched: ", fetched);
  if (fetched) {
    return (
      <div className="App">
        <h1> Songs: </h1>
        <Question />
      </div>
    );
  } else {
    return (
      <div className="App">
        <h1> Music Game </h1>
        <Settings />
        <FetchButton text="Give me a try" />
      </div>
    );
  }
}

export default App;
