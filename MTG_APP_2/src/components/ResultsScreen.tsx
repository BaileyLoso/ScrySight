import type { JSX } from "react";
import type { Card } from "../types";
import SearchResults from "./SearchResults";

type ResultsScreenProps = {
  readonly results: Card[];
  readonly setDisplay: React.Dispatch<React.SetStateAction<number>>;
};

export default function ResultsScreen({
  results,
  setDisplay,
}: ResultsScreenProps): JSX.Element {
  return (
    <>
      <header>You have reached the Results Screen!</header>
      <div className="results-screen">
        <button className="results-screen-exit" onClick={() => setDisplay(0)}>
          X
        </button>
        <SearchResults results={results} />
      </div>
    </>
  );
}
