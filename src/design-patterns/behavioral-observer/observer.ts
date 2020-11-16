export default interface Observer {
  notify(storeName: string, discount: number): void;
}
