import { useState, type JSX } from "react";
import type { Card } from "../types";

type resultProps = {
  readonly card: Card;
  readonly key: string;
};

export default function Result({ card }: resultProps): JSX.Element {
  // State variable for double-sided cards to indicate current side
  const [cardFace, setCardFace] = useState(0);

  // Double-sided cards uniquely have a "card_faces" JSON field
  // Only set true if card_faces exists and has a Card object
  const isDoubleSided: boolean =
    Array.isArray(card.card_faces) && card.card_faces.length > 0;

  const imageURI =
    isDoubleSided && card.card_faces[cardFace].image_uris
      ? card.card_faces[cardFace].image_uris?.png
      : card.image_uris?.png;

  const name =
    isDoubleSided && card.card_faces[cardFace].name
      ? card.card_faces[cardFace].name
      : card.name;

  // Render card name and art
  // Conditionally render button if card is double-sided
  return (
    <div className="result">
      {imageURI && <img src={imageURI} alt={name} />}
      <h2>{name}</h2>
      {isDoubleSided && card.card_faces.length > 1 && (
        <button
          className="results-swap-button"
          onClick={() => setCardFace(cardFace === 0 ? 1 : 0)}
        >
          &#8617;
        </button>
      )}
    </div>
  );
}
