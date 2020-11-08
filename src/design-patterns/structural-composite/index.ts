import CatalogItem from './catalog-item';
import CatalogGroup from './catalog-group';

function run() {
  console.log('\nDESIGN PATTERN - STRUCTURAL - COMPOSITE\n');

  const boots = new CatalogItem('Leather Boots', 79.99);
  const sneakers = new CatalogItem('Kicks', 39.99);
  const flipFlops = new CatalogItem('Flip Flops', 19.99);

  const groupShoes = new CatalogGroup('Shoes and Such', [
    boots,
    sneakers,
    flipFlops,
  ]);

  const groupFood = new CatalogGroup('Foods', [
    new CatalogItem('Milk', 1.99),
    new CatalogItem('Chips', 2.99),
  ]);

  const groupOtherStuff = new CatalogGroup('Other things', [
    new CatalogItem('Key chain', 5.99),
    new CatalogItem('Scarf', 10.99),
  ]);

  const catalog = new CatalogGroup('Entire catalog', [
    groupShoes,
    groupFood,
    groupOtherStuff,
  ]);

  catalog.print();

  console.log(`\nCatalog total: £${catalog.total}`);
}

export default run;
