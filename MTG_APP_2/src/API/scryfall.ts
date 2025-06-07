// @ts-check
 /* Functions used to fetch data from the Scryfall API*/
let url: string = 'https://api.scryfall.com';

async function cardSearch(input: string): Promise<void> {
  try {
    const encodedInput = encodeURIComponent(input.trim());
    const formattedInput = encodedInput.replace(/%22/g, '"').replace(/%20/g, '+');

    console.log(formattedInput);
    const response = await fetch(`${url}/cards/search?q=${encodeURIComponent(formattedInput)}`);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log('Error searching for card data: ', error);
  }
}