import fs from 'node:fs/promises';
import path from 'node:path';
import { __dirname } from './utils.js';

const sourceFolderPath = path.join(__dirname, 'files');

const list = async () => {
  try {
    const files = await fs.readdir(sourceFolderPath);
    console.log(files);
  } catch (err) {
    if (err.code === 'ENOENT') {
      throw new Error('FS operation failed');
    } else {
      console.error(err);
    }
  }
};

await list();
