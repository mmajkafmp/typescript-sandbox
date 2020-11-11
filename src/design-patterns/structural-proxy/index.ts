import path from 'path';
import nodeFs from 'fs';
import FilesystemProxy from './fs-proxy';

function runProxy() {
  console.log('\nDESIGN PATTERN - CREATIONAL - PROXY\n');

  const fs = new FilesystemProxy(nodeFs);

  const txtFile = path.join(process.cwd(), 'static', 'Readme.txt');
  const mdFile = path.join(process.cwd(), 'static', 'Readme.md');

  const contents = fs.readFileSync(mdFile, 'UTF-8');

  console.log(`Reading ${mdFile} file...\n`);
  console.log(contents);

  try {
    console.log(`Reading ${txtFile} file...\n`);
    fs.readFileSync(txtFile, 'UTF-8');
  } catch (error) {
    console.log(`Error reading ${txtFile} file`);
    console.error(error.message);
  }
}

export default runProxy;
