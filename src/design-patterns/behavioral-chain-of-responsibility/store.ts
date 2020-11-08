import Storage from './storage';
import StorageChain from './storage-chain';

export default class Store {
  name: string;
  storage: Storage;

  constructor(name: string, inventory: StorageChain) {
    this.name = name;

    var floor = new Storage('store floor', inventory.floor);
    var backroom = new Storage('store backroom', inventory.backroom);
    var localStore = new Storage('nearby store', inventory.localStore, 1);
    var warehouse = new Storage('warehouse', inventory.warehouse, 5);

    floor.setNext(backroom);
    backroom.setNext(localStore);
    localStore.setNext(warehouse);

    this.storage = floor;
  }

  find(itemName: string) {
    return this.storage.find(itemName);
  }
}
