import { createInterface } from 'readline';
import conductor from './conductor';
import { ExitCommand, CreateCommand } from './commands';

export function runCommandRepl() {
  const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  console.log('create <fileName> <text> | history | undo | redo | exit');
  rl.prompt();

  rl.on('line', (input: string) => {
    const [commandText, ...remaining] = input.split(' ');
    const [fileName, ...fileText] = remaining;
    const text = fileText.join(' ');

    switch (commandText) {
      case 'history':
        conductor.printHistory();
        break;

      case 'undo':
        conductor.undo();
        break;

      case 'redo':
        conductor.redo();
        break;

      case 'exit':
        conductor.run(new ExitCommand());
        break;

      case 'create':
        conductor.run(new CreateCommand(fileName, text));
        break;

      default:
        console.log(`${commandText} command not found!`);
    }

    rl.prompt();
  });
}

export default function runCommand() {
  console.log('\nDESIGN PATTERN - BEHAVIORAL - COMMAND\n');

  conductor.run(new CreateCommand('command-output-tmp.txt', 'Sample text'));
  conductor.printHistory();
  conductor.undo();
  conductor.redo();
  conductor.printHistory();
}
