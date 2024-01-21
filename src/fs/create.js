import fs from 'node:fs';
import path from 'node:path';
import { __dirname } from './utils.js';

const filePath = path.join(__dirname, 'files', 'fresh.txt');
const fileContent = 'I am fresh and young';

const create = async () => {
  fs.writeFile(filePath, fileContent, { flag: 'wx' }, (err) => {
    if (err) {
      if (err.code === 'EEXIST') {
        throw new Error('FS operation failed');
      } else {
        throw err;
      }
    } else {
      console.log('The file was created successfully!');
    }
  });
};

await create();
