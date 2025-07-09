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
    <div>
      You have reached the Results Screen!
      <SearchResults results={results} setDisplay={setDisplay} />
    </div>
  );
}
