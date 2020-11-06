import { Shopper } from './shopper';
import {
  InventoryItem,
  GoldInventoryItem,
  DiamondInventoryItem,
} from './inventory-item';

const alex = new Shopper('Alex', 3000);

const walkman = new InventoryItem('Walkman', 29.99);
const neclace = new InventoryItem('Necklace', 9.99);
const goldNeclace = new GoldInventoryItem(neclace);
const diamondGoldNeclace = new DiamondInventoryItem(goldNeclace);
const diamondWalkman = new DiamondInventoryItem(walkman);

export const run = () => {
  console.log('\nDESIGN PATTERN - STRUCTURAL - DECORATOR\n');

  alex.purchase(neclace);
  alex.printStatus();

  alex.purchase(walkman);
  alex.printStatus();

  alex.purchase(diamondGoldNeclace);
  alex.printStatus();

  alex.purchase(diamondWalkman);
  alex.printStatus();
};
