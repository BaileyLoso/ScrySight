import type { JSX } from "react";
import type { Card } from "../types";
import SearchBar from "./SearchBar";

type SearchScreenProps = {
  readonly inputText: string;
  readonly setInputText: (value: string) => void;
  readonly results: Card[];
  readonly setResults: React.Dispatch<React.SetStateAction<Card[]>>;
  readonly setDisplay: React.Dispatch<React.SetStateAction<number>>;
};

export default function HomeScreen({
  inputText,
  setInputText,
  results,
  setResults,
  setDisplay,
}: SearchScreenProps): JSX.Element {
  return (
    <>
      <h1>Magic: the Card Search</h1>
      <h2>Powered by ScryfallAPI</h2>
      <SearchBar
        inputText={inputText}
        setInputText={setInputText}
        results={results}
        setResults={setResults}
        setDisplay={setDisplay}
      />
    </>
  );
}
