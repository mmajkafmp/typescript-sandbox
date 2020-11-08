import Inventory from './inventory';

export default interface StorageChain {
  floor: Inventory[];
  backroom: Inventory[];
  localStore: Inventory[];
  warehouse: Inventory[];
}
