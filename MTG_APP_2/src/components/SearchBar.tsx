import React, { type JSX } from "react";
import cardSearch from "../services/scryfall.ts";

type SearchBarProps = {
  readonly inputText: string;
  readonly setInputText: (value: string) => void;
  readonly searchResults: never[];
  readonly setResults: React.Dispatch<React.SetStateAction<never[]>>;
};

export function SearchBar({
  inputText,
  setInputText,
  searchResults,
  setResults,
}: SearchBarProps): JSX.Element {
  async function handleSearch() {
    try {
      const data = await cardSearch(inputText);
      setResults(data.data || []);
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
