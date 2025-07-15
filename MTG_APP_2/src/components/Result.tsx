import { useState, type JSX } from "react";
import type { Card } from "../types";

type resultProps = {
  readonly card: Card;
  readonly key: string;
};

export default function Result({ card }: resultProps): JSX.Element {
  const [cardFace, setCardFace] = useState(0);
  const hasCardFaces: boolean =
    Array.isArray(card.card_faces) && card.card_faces.length > 0;

  const image =
    hasCardFaces && card.card_faces[cardFace].image_uris
      ? card.card_faces[cardFace].image_uris.png
      : card.image_uris?.png;

  const name =
    hasCardFaces && card.card_faces[cardFace].name
      ? card.card_faces[cardFace].name
      : card.name;

  return (
    <div className="result">
      {image && <img src={image} alt={name} />}
      <h2>{name}</h2>
      {hasCardFaces && card.card_faces.length > 1 && (
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
