import scoutPrototype from './scout-prototype';

function run() {
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

export default run;
