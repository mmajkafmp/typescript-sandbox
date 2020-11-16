import Observer from './observer';
import Sale from './sale';

export default class Mall implements Observer {
  sales: Sale[];

  constructor() {
    this.sales = [];
  }

  notify(storeName: string, discount: number) {
    this.sales.push({ storeName, discount });
  }
}
