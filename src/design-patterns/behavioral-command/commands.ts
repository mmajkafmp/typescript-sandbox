const { writeFileSync, unlinkSync } = require('fs');
const path = require('path');

interface Command {
  name: string;
  execute(): void;
  undo(): void;
}

class ExitCommand implements Command {
  undo(): void {
    console.error('No can do!');
  }

  get name() {
    return 'exit... bye!';
  }

  execute() {
    process.exit(0);
  }
}

class CreateCommand implements Command {
  fileName: string;
  body: string;
  fullPath: string;

  constructor(fileName: string, text: string) {
    this.fileName = fileName;
    this.body = text;
    this.fullPath = path.join(process.cwd(), fileName);
  }

  get name() {
    return `create ${this.fileName}`;
  }

  execute() {
    writeFileSync(this.fullPath, this.body);
  }

  undo() {
    unlinkSync(this.fullPath);
  }
}

export { ExitCommand, CreateCommand, Command };
