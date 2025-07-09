import React, { type JSX } from "react";
import cardSearch from "../services/scryfall.ts";

type SearchBarProps = {
  readonly inputText: string;
  readonly setInputText: (value: string) => void;
  readonly setResults: React.Dispatch<React.SetStateAction<never[]>>;
  readonly setDisplay: React.Dispatch<React.SetStateAction<number>>;
};

export default function SearchBar({
  inputText,
  setInputText,
  setResults,
  setDisplay,
}: SearchBarProps): JSX.Element {
  async function handleSearch() {
    try {
      const data = await cardSearch(inputText);
      setResults(data.data || []);
      setDisplay(1);
    } catch (error) {
      setResults([]);
      console.log(`Exception while searching for card ${error}`);
    }
  }
  return (
    <div className="search-bar">
      <input
        type="search"
        placeholder="Search..."
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <button id="search-submit-button" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
}
