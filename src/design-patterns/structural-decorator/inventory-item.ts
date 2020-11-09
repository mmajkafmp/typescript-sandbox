import Item from './item';

export class InventoryItem implements Item {
  name: string;
  price: number;

  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }

  print() {
    console.log(`${this.name} costs ${this.price}`);
  }
}

export class GoldInventoryItem implements Item {
  name: string;
  price: number;

  constructor(baseItem: Item) {
    this.name = `Golden ${baseItem.name}`;
    this.price = 1000 + baseItem.price;
  }
}

export class DiamondInventoryItem implements Item {
  name: string;
  price: number;

  constructor(baseItem: Item) {
    this.name = `Diamong ${baseItem.name}`;
    this.price = 1000 + baseItem.price;
  }
}
