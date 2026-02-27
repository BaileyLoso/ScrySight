import React, {type JSX, useState} from "react";
import type {Card} from "../types";
import cardSearch from "../services/scryfall.ts";

// TODO: Fix setResults() function. Results is an empty array after setResults is called.

type SearchBarProps = {
  readonly onSearchComplete: (results: Card[]) => void;
  readonly onSearchError: (error: string) => void;
};

export default function SearchBar({
                                    onSearchComplete,
                                    onSearchError,
                                  }: SearchBarProps): JSX.Element {
  const [inputText, setInputText] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    if (!inputText.trim()) return;

    try {
      setIsLoading(true);
      const data = await cardSearch(inputText);
      onSearchComplete(data || []);
    } catch (error) {
      onSearchError(`Exception while searching for card. ${error}`);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <form className="search-bar" onSubmit={handleSearch}>
      <input
        type="search"
        placeholder="Search..."
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        disabled={isLoading}
      />
      <button id="search-submit-button" type="submit" disabled={isLoading || !inputText.trim()}>
        {isLoading ? "Searching..." : "Search"}
      </button>
    </form>
  );
}