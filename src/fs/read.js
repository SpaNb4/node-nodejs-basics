import fs from 'node:fs/promises';
import path from 'node:path';
import { __dirname } from './utils.js';

const sourceFilePath = path.join(__dirname, 'files', 'fileToRead.txt');

const read = async () => {
  try {
    const fileContent = await fs.readFile(sourceFilePath, 'utf8');
    console.log(fileContent);
  } catch (err) {
    if (err.code === 'ENOENT') {
      throw new Error('FS operation failed');
    } else {
      console.error(err);
    }
  }
};

await read();
