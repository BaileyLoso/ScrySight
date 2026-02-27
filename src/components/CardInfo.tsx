import {useState, type JSX} from "react";
import type {Card} from "../types";
import {Screen} from "../types";
import ExitButton from "./ExitButton.tsx";
import CardRules from "./CardRules.tsx";

type cardInfoProps = {
  readonly card: Card;
  readonly setCurrScreen: React.Dispatch<React.SetStateAction<Screen>>;
};

export default function CardInfo({card, setCurrScreen}: cardInfoProps): JSX.Element {
  // State variable for double-sided cards to indicate the current side
  const [cardInfoFace, setCardInfoFace] = useState(0);


  // Double-sided cards uniquely have a "card_faces" JSON field
  // Only set true if card_faces exists and has a Card object
  const isDoubleSided: boolean =
    Array.isArray(card.card_faces) && card.card_faces.length > 0;

  const imageURI: string | undefined =
    isDoubleSided && card.card_faces[cardInfoFace].image_uris
      ? card.card_faces[cardInfoFace].image_uris?.png
      : card.image_uris?.png;

  const name: string =
    isDoubleSided && card.card_faces[cardInfoFace].name
      ? card.card_faces[cardInfoFace].name
      : card.name;

  // If there is a new-line in the Oracle text, render it on a new line
  function handleOracleText(card: Card): JSX.Element[] {
    const oracleText = card.oracle_text.split("\n");
    return oracleText.map((line, index) => <p key={index}>{line}</p>);
  }


  // Render card name and art
  // Conditionally render button if the card is double-sided
  // Update selectCard with itemId when a card's art or name is selected
  return (
    <>
      <div className="card-info">
        <ExitButton setCurrScreen={setCurrScreen} displayValue={Screen.RESULTS}/>
        {imageURI && <img src={imageURI} alt={name}/>}
        {isDoubleSided && card.card_faces.length > 1 && (
          <button
            className="results-swap-button"
            onClick={() => setCardInfoFace(cardInfoFace === 0 ? 1 : 0)}
          >
            &#8617;
          </button>
        )}
        <div className="card-info-content">
          <h1 style={{justifySelf: "center"}}>{name}</h1>
          {isDoubleSided ? handleOracleText(card.card_faces[cardInfoFace]) : handleOracleText(card)}
          <h2>Rulings</h2>
          <ul>
            <CardRules cardData={card}/>
          </ul>
        </div>
      </div>
    </>
  );
}