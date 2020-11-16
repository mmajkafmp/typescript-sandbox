import { Command } from './commands';

class Conductor {
  history: Command[];
  undone: Command[];

  constructor() {
    this.history = [];
    this.undone = [];
  }

  run(command: Command) {
    console.log(`Executing command: ${command.name}`);
    command.execute();
    this.history.push(command);
  }

  printHistory() {
    this.history.forEach((command) => console.log(command.name));
  }

  undo() {
    var command = this.history.pop() as Command;
    console.log(`undo ${command.name}`);
    command.undo();
    this.undone.push(command);
  }

  redo() {
    var command = this.undone.pop() as Command;
    console.log(`redo ${command.name}`);
    command.execute();
    this.history.push(command);
  }
}

export default new Conductor();
