import type {JSX} from "react";
import type {Card} from "../types";
import {Screen} from "../types";
import SearchBar from "./SearchBar";

type SearchScreenProps = {
  readonly setResults: React.Dispatch<React.SetStateAction<Card[]>>;
  readonly setCurrScreen: React.Dispatch<React.SetStateAction<Screen>>;
  readonly onSearchComplete: (results: Card[]) => void;
  readonly onSearchError: (errorMessage: string) => void;
};

export default function HomeScreen({
                                     // setResults,
                                     // setCurrScreen,
                                     onSearchComplete,
                                     onSearchError,
                                   }: SearchScreenProps): JSX.Element {


  return (
    <div className="home-screen">
      <h1>ScrySight</h1>
      <h2>Powered by ScryfallAPI</h2>
      <SearchBar
        onSearchComplete={onSearchComplete}
        onSearchError={onSearchError}
      />
    </div>
  );
}