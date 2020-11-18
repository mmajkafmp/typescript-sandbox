import { writeFileSync, existsSync, readFileSync, unlinkSync } from 'fs';
import path from 'path';

const STORAGE_FILE_PATH = path.join(process.cwd(), 'local-store-tmp.json');

class LocalStorageAdapter {
  items: any; // TODO: can be an object but treated as an array?

  constructor() {
    if (existsSync(STORAGE_FILE_PATH)) {
      console.log(`Loading items from ${STORAGE_FILE_PATH}`);

      const txt = readFileSync(STORAGE_FILE_PATH).toString();

      this.items = JSON.parse(txt);
    } else {
      this.items = {};
    }
  }

  get length() {
    return Object.keys(this.items).length;
  }

  getItem(key: string): string {
    return this.items[key];
  }

  setItem(key: string, value: string) {
    this.items[key] = value;

    try {
      writeFileSync(STORAGE_FILE_PATH, JSON.stringify(this.items));
    } catch (error) {
      console.error(error);
    }
  }

  clear() {
    this.items = {};

    try {
      unlinkSync(STORAGE_FILE_PATH);

      console.log(`${STORAGE_FILE_PATH} file removed`);
    } catch (error) {
      console.error(error);
    }
  }
}

export default LocalStorageAdapter;
