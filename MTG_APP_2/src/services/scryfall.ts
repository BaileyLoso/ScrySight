// @ts-check
/* Functions used to fetch data from the Scryfall API*/
import type {Card} from "../types";

const url: string = "https://api.scryfall.com";

export default async function cardSearch(input: string): Promise<Card[]> {
  try {
    const formattedInput = input.trim().replace(/ /g, "+");
    const encodedInput = encodeURIComponent(formattedInput).replace(
      /%22/g,
      '"'
    );
    const response = await fetch(`${url}/cards/search?q=${encodedInput}`);
    const jsonData = await response.json();
    const cards = jsonData.data;
    console.log(cards);
    return cards;
  } catch (error) {
    console.log("Error searching for card data: ", error);
    throw error;
  }
}