import fs from 'node:fs/promises';
import path from 'node:path';
import { __dirname } from './utils.js';

const fileToRemovePath = path.join(__dirname, 'files', 'fileToRemove.txt');

const remove = async () => {
  try {
    await fs.unlink(fileToRemovePath);
    console.log('The files was removed successfully!');
  } catch (err) {
    if (err.code === 'ENOENT') {
      throw new Error('FS operation failed');
    } else {
      console.error(err);
    }
  }
};

await remove();
