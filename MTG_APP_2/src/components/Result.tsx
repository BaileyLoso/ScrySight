import type { JSX } from "react";
import type { Card } from "../types";

type resultProps = {
  readonly card: Card;
  readonly key: string;
};

export default function Result({ card, key }: resultProps): JSX.Element {
  return (
    <div key={key}>
      {card.image_uris && <img src={card.image_uris.normal} alt={card.name} />}
      <h2>{card.name}</h2>
    </div>
  );
}
