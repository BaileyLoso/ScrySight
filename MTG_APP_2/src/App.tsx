import { useState } from "react";
import SearchBar from "./components/SearchBar";
import SearchScreen from "./components/SearchScreen";
import ResultsScreen from "./components/ResultsScreen";
import "./styles/App.css";

function App() {
  const [inputText, setInputText] = useState("");
  const [results, setResults] = useState([]);
  const [display, setDisplay] = useState(0);
  return display === 0 ? (
    <SearchScreen
      inputText={inputText}
      setInputText={setInputText}
      setResults={setResults}
      setDisplay={setDisplay}
    />
  ) : (
    <ResultsScreen />
  );
}

export default App;
