import Person from './person';

export default class PersonBuilder {
  name: string;
  shoppingList: string[] = [];
  isEmployee: boolean = false;
  isManager: boolean = false;
  hours: number = 0;
  money: number = 0;

  constructor(name: string) {
    this.name = name;
  }

  makeEmployee(): PersonBuilder {
    this.isEmployee = true;

    return this;
  }

  makeManager(hours = 40): PersonBuilder {
    this.isManager = true;
    this.hours = hours;

    return this;
  }

  makePartTime(hours = 20): PersonBuilder {
    this.hours = hours;

    return this;
  }

  withMoney(money: number): PersonBuilder {
    this.money = money;

    return this;
  }

  withList(list: string[] = []): PersonBuilder {
    this.shoppingList = list;

    return this;
  }

  build(): Person {
    return new Person(this);
  }
}
