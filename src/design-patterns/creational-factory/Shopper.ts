import Person from './person';

export default class Shopper extends Person {
  money: number;
  employed: boolean;

  constructor(name: string, money = 0) {
    super(name);
    this.money = money;
    this.employed = false;
  }
}
