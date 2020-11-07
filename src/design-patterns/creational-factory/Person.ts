export default class Person {
  name: string;

  constructor(name = 'unnamed person') {
    this.name = name;
  }

  toString() {
    return JSON.stringify(this);
  }
}
