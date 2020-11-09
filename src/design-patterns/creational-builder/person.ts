import PersonBuilder from './person-builder';

export default class Person {
  name: string;
  isEmployee: boolean;
  isManager: boolean;
  hours: number;
  money: number;
  shoppingList: string[];

  constructor(builder: PersonBuilder) {
    this.name = builder.name;
    this.isEmployee = builder.isEmployee;
    this.isManager = builder.isManager;
    this.hours = builder.hours || 0;
    this.money = builder.money || 0;
    this.shoppingList = builder.shoppingList || [];
  }

  toString(): string {
    return JSON.stringify(this);
  }
}
