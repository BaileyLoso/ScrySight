import type {JSX} from "react";
import type {Card} from "../types";
import {Screen} from "../types";
import SearchResults from "./SearchResults";
import ExitButton from "./ExitButton";
import SearchBar from "./SearchBar.tsx";

type ResultsScreenProps = {
  readonly results: Card[];
  readonly setCurrScreen: React.Dispatch<React.SetStateAction<Screen>>;
  readonly setSelectedCardId?: React.Dispatch<React.SetStateAction<string>>;
  readonly onSearchComplete: (results: Card[]) => void;
  readonly onSearchError: (errorMessage: string) => void;
};

export default function ResultsScreen({
                                        results,
                                        setCurrScreen,
                                        setSelectedCardId,
                                        onSearchComplete,
                                        onSearchError,
                                      }: ResultsScreenProps): JSX.Element {

  function handleCardSelect(cardId: string) {
    if (setSelectedCardId && cardId) {
      setSelectedCardId(cardId);
      setCurrScreen(Screen.CARD_INFO);
    }
  }

  if (!results || results.length === 0) {
    return (
      <>
        <header>ScrySight</header>
        <SearchBar onSearchComplete={onSearchComplete} onSearchError={onSearchError}/>
        <div className="results-screen">
          <h1>No results found</h1>
          <ExitButton setCurrScreen={setCurrScreen} displayValue={Screen.HOME}/>
        </div>
      </>
    )
  }
  return (
    <>
      <header><h1>ScrySight</h1></header>
      <SearchBar onSearchComplete={onSearchComplete} onSearchError={onSearchError}/>
      <div className="results-screen">
        <ExitButton setCurrScreen={setCurrScreen} displayValue={Screen.HOME}/>
        <SearchResults results={results} setSelectCard={handleCardSelect}/>
      </div>
    </>
  );
}