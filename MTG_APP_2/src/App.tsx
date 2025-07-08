import { useState } from "react";
import { SearchBar } from "./components/SearchBar";
//import { cardSearch } from './API/scryfall.js'
import "./styles/App.css";

function App() {
  const [inputText, setInputText] = useState("");
  const [results, setResults] = useState([]);
  return (
    <>
      <h1>Magic: the Gathering Card Search</h1>
      <SearchBar
        inputText={inputText}
        setInputText={setInputText}
        searchResults={results}
        setResults={setResults}
      />
      <div className="card"></div>
    </>
  );
}

export default App;
