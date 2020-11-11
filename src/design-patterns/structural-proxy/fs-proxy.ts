export default class FilesystemProxy {
  fs: { readFileSync: Function };

  constructor(fsSubject: { readFileSync: Function }) {
    this.fs = fsSubject;
  }

  readFileSync(path: string, format: string) {
    if (!path.match(/.md$|.MD$/)) {
      throw new Error(`Can only read Markdown files.`);
    }

    return this.fs.readFileSync(path, format);
  }
}
