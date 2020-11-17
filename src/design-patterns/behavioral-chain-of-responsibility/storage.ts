import Inventory from './inventory';
import SearchResult from './search-result';

export default class Storage {
  name: string;
  next: Storage | null;
  inventory: Inventory[];
  deliveryTime: number;

  constructor(name: string, inventory: Inventory[] = [], deliveryTime = 0) {
    this.name = name;
    this.inventory = inventory;
    this.deliveryTime = deliveryTime;
    this.next = null;
  }

  lookInLocalInventory(itemName: string) {
    const index = this.inventory.map((item) => item.name).indexOf(itemName);

    return this.inventory[index];
  }

  setNext(storage: Storage) {
    this.next = storage;
  }

  find(itemName: string): SearchResult | string {
    const found = this.lookInLocalInventory(itemName);
    if (found) {
      return {
        name: found.name,
        qty: found.qty,
        location: this.name,
        deliveryTime:
          this.deliveryTime === 0 ? 'now' : `${this.deliveryTime} day(s)`,
      };
    } else if (this.next) {
      return this.next.find(itemName);
    } else {
      return `we do not carry ${itemName}`;
    }
  }
}
