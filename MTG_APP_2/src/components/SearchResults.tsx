import type { JSX } from "react";
import type { Card } from "../types";
import Result from "./Result";

type SearchResultsProps = {
  readonly results: Card[];
};

export default function SearchResults({
  results,
}: SearchResultsProps): JSX.Element {
  return (
    <div className="results-container">
      {results.map((item) => (
        <Result card={item} key={item.id} />
      ))}{" "}
    </div>
  );
}
