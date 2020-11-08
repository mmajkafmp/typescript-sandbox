import Catalogable from './catalogable';

export default class CatalogItem implements Catalogable {
  name: string;
  price: number;

  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }

  get total(): number {
    return this.price;
  }

  print() {
    console.log(`${this.name} £${this.price}`);
  }
}
