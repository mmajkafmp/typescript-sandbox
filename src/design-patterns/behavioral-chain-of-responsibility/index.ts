import Store from './store';
import inventory from './inventory-data.json';

const skiShop = new Store('Steep and Deep', inventory);

export default function runChainOfResponsibility() {
  console.log('\nDESIGN PATTERN - BEHAVIORAL - CHAIN OF RESPONSIBILITY\n');

  const searchItem = 'powder skis';
  const results = skiShop.find(searchItem);

  console.log(results);
}
