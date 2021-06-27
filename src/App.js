import "./App.css";
import Settings from "./Components/Settings";
import FetchButton from "./Components/FetchButton";

function App() {
  return (
    <div className="App">
      <h1> Music Game </h1>
      <Settings />
      <FetchButton text="Give me a try" />
    </div>
  );
}

export default App;
