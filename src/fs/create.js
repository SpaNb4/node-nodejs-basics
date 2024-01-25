import fs from 'node:fs/promises';
import path from 'node:path';
import { __dirname } from './utils.js';

const filePath = path.join(__dirname, 'files', 'fresh.txt');
const fileContent = 'I am fresh and young';

const create = async () => {
  try {
    await fs.writeFile(filePath, fileContent, { flag: 'wx' });
    console.log('The file was created successfully!');
  } catch (err) {
    if (err.code === 'EEXIST') {
      throw new Error('FS operation failed');
    } else {
      console.error(err);
    }
  }
};

await create();
