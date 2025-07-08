import React, { type JSX } from "react";
import type { Card } from "../types";
import cardSearch from "../services/scryfall.ts";

// TODO: Fix setResults() function. Results is an empty array after setResults is called.

type SearchBarProps = {
  readonly inputText: string;
  readonly setInputText: (value: string) => void;
  readonly results: Card[];
  readonly setResults: React.Dispatch<React.SetStateAction<Card[]>>;
  readonly setDisplay: React.Dispatch<React.SetStateAction<number>>;
};

export default function SearchBar({
  inputText,
  setInputText,
  results,
  setResults,
  setDisplay,
}: SearchBarProps): JSX.Element {
  async function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    try {
      const data = await cardSearch(inputText);
      setResults(data || []);
      console.log(results);
      setDisplay(1);
    } catch (error) {
      setResults([]);
      console.log(`Exception while searching for card ${error}`);
    }
  }
  return (
    <form className="search-bar" onSubmit={handleSearch}>
      <input
        type="search"
        placeholder="Search..."
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <button id="search-submit-button" type="submit">
        Search
      </button>
    </form>
  );
}
