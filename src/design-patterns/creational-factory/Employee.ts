import Shopper from './Shopper';

export default class Employee extends Shopper {
  employer: string;

  constructor(name: string, money = 0, employer = '') {
    super(name, money);
    this.employer = employer;
    this.employed = true;
  }

  payDay(money = 0) {
    this.money += money;
  }
}
