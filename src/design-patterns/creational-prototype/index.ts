import scoutPrototype from './scout-prototype';

export default function runPrototype() {
  console.log('\nDESIGN PATTERN - CREATIONAL - PROTOTYPE\n');

  const alex = scoutPrototype.clone();
  alex.name = 'Alex Banks';
  alex.addItemToList('slingshot');

  const eve = scoutPrototype.clone();
  eve.name = 'Eve Porcello';
  eve.addItemToList('reading light');

  console.log(`${alex.name}: ${alex.shoppingList}`);
  console.log(`${eve.name}: ${eve.shoppingList}`);
}
