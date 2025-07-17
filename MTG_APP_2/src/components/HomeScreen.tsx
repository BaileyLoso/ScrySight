import type {JSX} from "react";
import type {Card} from "../types";
import {Screen} from "../types";
import SearchBar from "./SearchBar";

type SearchScreenProps = {
  readonly inputText: string;
  readonly setInputText: (value: string) => void;
  readonly results: Card[];
  readonly setResults: React.Dispatch<React.SetStateAction<Card[]>>;
  readonly setCurrScreen: React.Dispatch<React.SetStateAction<Screen>>;
};

export default function HomeScreen({
                                     inputText,
                                     setInputText,
                                     results,
                                     setResults,
                                     setCurrScreen,
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
        setCurrScreen={setCurrScreen}
      />
    </>
  );
}