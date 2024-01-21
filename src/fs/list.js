import fs from 'node:fs';
import path from 'node:path';
import { __dirname } from './utils.js';

const sourceFolderPath = path.join(__dirname, 'files');

const list = async () => {
  fs.readdir(sourceFolderPath, (err, files) => {
    if (err) {
      if (err.code === 'ENOENT') {
        throw new Error('FS operation failed');
      } else {
        throw err;
      }
    } else {
      console.log(files);
    }
  });
};

await list();
