import fs from 'node:fs';
import path from 'node:path';
import { __dirname } from './utils.js';

const sourceFilePath = path.join(__dirname, 'files', 'wrongFilename.txt');
const destinationFilePath = path.join(__dirname, 'files', 'properFilename.md');

const rename = async () => {
  fs.access(destinationFilePath, fs.constants.F_OK, (err) => {
    if (!err) {
      throw new Error('FS operation failed');
    } else {
      fs.rename(sourceFilePath, destinationFilePath, async (err) => {
        if (err) {
          if (err.code === 'ENOENT') {
            throw new Error('FS operation failed');
          } else {
            throw err;
          }
        } else {
          console.log('The files was renamed successfully!');
        }
      });
    }
  });
};

await rename();
