import ICatalogable from './icatalogable';

export default class CatalogGroup implements ICatalogable {
  name: string;
  composites: ICatalogable[];

  constructor(name: string, composites: ICatalogable[] = []) {
    this.name = name;
    this.composites = composites;
  }

  get total(): number {
    return this.composites.reduce(
      (total, nextItem: ICatalogable) => total + nextItem.total,
      0,
    );
  }

  print() {
    console.log(`\n${this.name.toUpperCase()}`);

    this.composites.forEach((item) => item.print());
  }
}
