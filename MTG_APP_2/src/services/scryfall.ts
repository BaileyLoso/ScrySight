// @ts-check
/* Functions used to fetch data from the Scryfall API*/
const url: string = "https://api.scryfall.com";

export default async function cardSearch(input: string): Promise<any> {
  try {
    const formattedInput = input.trim().replace(/ /g, "+");
    const encodedInput = encodeURIComponent(formattedInput).replace(
      /%22/g,
      '"'
    );
    const response = await fetch(`${url}/cards/search?q=${encodedInput}`);
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log("Error searching for card data: ", error);
    throw error;
  }
}
