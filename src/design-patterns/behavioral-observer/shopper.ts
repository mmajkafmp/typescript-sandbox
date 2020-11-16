import Observer from './observer';

export default class Shopper implements Observer {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  notify(storeName: string, discount: number) {
    console.log(
      `${this.name}, there is a sale at ${storeName}! ${discount}% off everything!`,
    );
  }
}
