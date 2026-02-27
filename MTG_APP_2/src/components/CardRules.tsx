import {useState, type JSX, useEffect} from "react";
import type {Card, RulesResponse, RuleItem} from "../types";
import {fetchJson} from "../services/scryfall.ts";

type CardRulesProps = {
  readonly cardData: Card;
}

export default function CardRules({cardData: card}: CardRulesProps): JSX.Element {
  const [rules, setRules] = useState<RulesResponse | null>(null);
  const [rulesLoading, setRulesLoading] = useState(false);
  const [rulesError, setRulesError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchRules() {
      setRulesLoading(true);
      setRulesError(null);
      try {
        const rulesData = await fetchJson<RulesResponse>(card.rulings_uri);
        setRules(rulesData);
      } catch (error) {
        console.log(`Error fetching rules: ${error}`);
        setRulesError("Failed to load rules");
      } finally {
        setRulesLoading(false);
      }
    }

    fetchRules();
  }, [card.rulings_uri])

  if (rulesLoading) {
    return (<p>Loading rules...</p>)
  } else if (rulesError) {
    return (<p>Error: {rulesError}</p>)
  } else if (!rules || !rules.data.length) {
    return (<p>No rules found</p>)
  } else {
    return rules.data.map((rule: RuleItem, n: number = 0) => <li key={n + 1}><span>&bull;</span> {rule.comment}</li>)
  }


}