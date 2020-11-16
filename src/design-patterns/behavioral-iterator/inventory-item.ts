export default class InventoryItem {
  name: string;
  price: number;

  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }

  print() {
    console.log(`${this.name}: $${this.price}`);
  }
}
