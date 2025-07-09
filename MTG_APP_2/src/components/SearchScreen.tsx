import SearchBar from "./SearchBar";

type SearchScreenProps = {
  readonly inputText: string;
  readonly setInputText: (value: string) => void;
  readonly setResults: React.Dispatch<React.SetStateAction<never[]>>;
  readonly setDisplay: React.Dispatch<React.SetStateAction<number>>;
};

export default function SearchScreen({
  inputText,
  setInputText,
  setResults,
  setDisplay,
}: SearchScreenProps) {
  return (
    <>
      <h1>Magic: the Card Search</h1>
      <h2>Powered by ScryfallAPI</h2>
      <SearchBar
        inputText={inputText}
        setInputText={setInputText}
        setResults={setResults}
        setDisplay={setDisplay}
      />
    </>
  );
}
