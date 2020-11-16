import InventoryItem from './inventory-item';
import Iterator from './iterator';

export default function runIterator() {
  console.log('\nDESIGN PATTERN - BEHAVIORAL - ITERATOR\n');
  var inventory = new Iterator([
    new InventoryItem('Poles', 9.99),
    new InventoryItem('Skis', 799.99),
    new InventoryItem('Boots', 799.99),
    new InventoryItem('Burgers', 5.99),
    new InventoryItem('Fries', 2.99),
    new InventoryItem('Shake', 4.99),
    new InventoryItem('Jeans', 59.99),
    new InventoryItem('Shoes', 39.99),
  ]);

  inventory.next().print();
  inventory.prev().print();
  inventory.last().print();
  inventory.first().print();
}
