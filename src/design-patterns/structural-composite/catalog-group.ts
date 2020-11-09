import Catalogable from './catalogable';

export default class CatalogGroup implements Catalogable {
  name: string;
  composites: Catalogable[];

  constructor(name: string, composites: Catalogable[] = []) {
    this.name = name;
    this.composites = composites;
  }

  get total(): number {
    return this.composites.reduce(
      (total, nextItem: Catalogable) => total + nextItem.total,
      0,
    );
  }

  print() {
    console.log(`\n${this.name.toUpperCase()}`);

    this.composites.forEach((item) => item.print());
  }
}
