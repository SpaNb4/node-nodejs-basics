import fs from 'node:fs';
import path from 'node:path';
import { __dirname } from './utils.js';

const sourceFilePath = path.join(__dirname, 'files', 'fileToRead.txt');

const read = async () => {
  fs.readFile(sourceFilePath, 'utf8', (err, data) => {
    if (err) {
      console.log('', err);
      if (err.code === 'ENOENT') {
        throw new Error('FS operation failed');
      } else {
        throw err;
      }
    } else {
      console.log(data);
    }
  });
};

await read();
