import {useState} from "react";
import type {Card} from "./types";
import {Screen} from "./types";
import HomeScreen from "./components/HomeScreen";
import ResultsScreen from "./components/ResultsScreen";
import CardInfo from "./components/CardInfo";
import "./styles/App.css";

function App() {
  const [currScreen, setCurrScreen] = useState<Screen>(Screen.HOME);
  const [results, setResults] = useState<Card[]>([]);
  const [selectedCardId, setSelectedCardId] = useState("");

  const handleSearchComplete = (searchResults: Card[]) => {
    setResults(searchResults);
    setCurrScreen(Screen.RESULTS);
  }

  const handleSearchError = (errorMessage: string) => {
    setResults([]);
    console.error(errorMessage);
  }

  const renderScreen = () => {
    switch (currScreen) {
      case Screen.HOME:
        return (
          <HomeScreen
            setResults={setResults}
            setCurrScreen={setCurrScreen}
            onSearchComplete={handleSearchComplete}
            onSearchError={handleSearchError}
          />
        );
      case Screen.RESULTS:
        return (
          <>
            <ResultsScreen
              results={results}
              setCurrScreen={setCurrScreen}
              setSelectedCardId={setSelectedCardId}
              onSearchComplete={handleSearchComplete}
              onSearchError={handleSearchError}
            />
            <footer>The literal and graphical information presented on this site about Magic: The Gathering, including
              card images and mana symbols, is copyright Wizards of the Coast, LLC. ScrySight is not produced by or
              endorsed by Wizards of the Coast.
            </footer>
          </>
        );
      case Screen.CARD_INFO: {
        const selectedCard = results.find((card) => card.id === selectedCardId);
        return (
          <>
            <CardInfo
              card={selectedCard || results[0]}
              setCurrScreen={setCurrScreen}
            />
            <footer>The literal and graphical information presented on this site about Magic: The
              Gathering, including
              card images and mana symbols, is copyright Wizards of the Coast, LLC. ScrySight is not produced by or
              endorsed by Wizards of the Coast.
            </footer>
          </>
        );
      }
      default:
        return null;
    }
  };

  return renderScreen();
}

export default App;