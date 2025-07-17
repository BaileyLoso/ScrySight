import type {JSX} from "react";
import type {Card} from "../types";
import Result from "./Result";

type SearchResultsProps = {
  readonly results: Card[];
  readonly setSelectCard: (cardId: string) => void;

};

export default function SearchResults({
                                        results,
                                        setSelectCard,
                                      }: SearchResultsProps): JSX.Element {
  return (
    <div className="results-container">
      {results.map((item) => (
        <Result
          card={item}
          key={item.id}
          itemId={item.id}
          setSelectCardId={setSelectCard}
        />
      ))}{" "}
    </div>
  );
}