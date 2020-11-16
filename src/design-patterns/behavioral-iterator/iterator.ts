import InventoryItem from './inventory-item';

export default class Iterator {
  items: InventoryItem[];
  index: number;

  constructor(items: InventoryItem[] = []) {
    this.index = 0;
    this.items = items;
  }

  first() {
    var [first] = this.items;
    return first;
  }

  last() {
    var [last] = [...this.items].reverse();
    return last;
  }

  hasNext() {
    return this.index < this.items.length - 1;
  }

  current() {
    return this.items[this.index];
  }

  next() {
    if (this.hasNext()) {
      this.index += 1;
    }
    return this.current();
  }

  prev() {
    if (this.index !== 0) {
      this.index -= 1;
    }
    return this.current();
  }
}
