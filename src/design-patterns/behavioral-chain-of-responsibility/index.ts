import Store from './store';
import inventory from './inventory-data.json';

const skiShop = new Store('Steep and Deep', inventory);

function runChainOfResponsibility() {
  console.log('\nDESIGN PATTERN - BEHAVIORAL - CHAIN OF RESPONSIBILITY\n');

  var searchItem = 'powder skis';
  var results = skiShop.find(searchItem);

  console.log(results);
}

export default runChainOfResponsibility;
