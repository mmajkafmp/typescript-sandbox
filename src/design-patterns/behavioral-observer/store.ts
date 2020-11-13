import Observer from './observer';

export default class Store {
  name: string;
  subscribers: Observer[];

  constructor(name: string) {
    this.name = name;
    this.subscribers = [];
  }

  subscribe(observer: Observer) {
    this.subscribers.push(observer);
  }

  sale(discount: number) {
    this.subscribers.forEach((observer) =>
      observer.notify(this.name, discount),
    );
  }
}
