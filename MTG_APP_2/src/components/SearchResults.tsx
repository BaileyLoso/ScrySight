import type { JSX } from "react";
import type { Card } from "../types";
import Result from "./Result";

type SearchResultsProps = {
  readonly results: Card[];
  readonly setDisplay: React.Dispatch<React.SetStateAction<number>>;
};

export default function SearchResults({
  results,
  setDisplay,
}: SearchResultsProps): JSX.Element {
  return (
    <>
      {results.map((item) => (
        <Result card={item} key={item.id} />
      ))}{" "}
    </>
  );
}
