import PersonBuilder from './person-builder';

function runBuilder() {
  console.log('\nDESIGN PATTERN - CREATIONAL - BUILDER\n');

  const sue = new PersonBuilder('Sue').makeEmployee().makeManager(60).build();
  const bill = new PersonBuilder('Bill').makeEmployee().makePartTime().build();
  const phil = new PersonBuilder('Phil').makeEmployee().build();

  console.log(sue.toString());
  console.log(bill.toString());
  console.log(phil.toString());

  const charles = new PersonBuilder('Charles')
    .withMoney(500)
    .withList(['jeans', 'sunglasses'])
    .build();

  const tabbitha = new PersonBuilder('Tabbitha').withMoney(1000).build();

  console.log(charles.toString());
  console.log(tabbitha.toString());
}

export default runBuilder;
