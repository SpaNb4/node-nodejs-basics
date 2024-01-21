import fs from 'node:fs';
import path from 'node:path';
import { __dirname } from './utils.js';

const fileToRemovePath = path.join(__dirname, 'files', 'fileToRemove.txt');

const remove = async () => {
  fs.unlink(fileToRemovePath, (err) => {
    if (err) {
      if (err.code === 'ENOENT') {
        throw new Error('FS operation failed');
      } else {
        throw err;
      }
    } else {
      console.log('The files was removed successfully!');
    }
  });
};

await remove();
