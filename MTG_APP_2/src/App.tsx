import {useState} from "react";
import type {Card} from "./types";
import {Screen} from "./types";
import HomeScreen from "./components/HomeScreen";
import ResultsScreen from "./components/ResultsScreen";
import CardInfo from "./components/CardInfo";
import "./styles/App.css";

function App() {
  const [currScreen, setCurrScreen] = useState(Screen.HOME);
  const [inputText, setInputText] = useState("");
  const [results, setResults] = useState<Card[]>([]);
  const [selectedCardId, setSelectedCardId] = useState("");

  const renderScreen = () => {
    switch (currScreen) {
      case Screen.HOME:
        return (
          <HomeScreen
            inputText={inputText}
            setInputText={setInputText}
            setResults={setResults}
            setCurrScreen={setCurrScreen}
            results={[]}
          />
        );
      case Screen.RESULTS:
        return (
          <ResultsScreen
            results={results}
            setCurrScreen={setCurrScreen}
            setSelectedCardId={setSelectedCardId}
          />
        );
      case Screen.CARD_INFO: {
        const selectedCard = results.find((card) => card.id === selectedCardId);
        return (
          <CardInfo
            card={selectedCard || results[0]}
            setCurrScreen={setCurrScreen}
          />
        );
      }
      default:
        return null;
    }
  };

  return renderScreen();
}

export default App;