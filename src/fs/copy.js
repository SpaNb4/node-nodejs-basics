import fs from 'node:fs/promises';
import path from 'node:path';
import { __dirname } from './utils.js';

const sourceFolderPath = path.join(__dirname, 'files');
const destinationFolderPath = path.join(__dirname, 'files_copy');

const copy = async () => {
  try {
    await fs.cp(sourceFolderPath, destinationFolderPath, {
      recursive: true,
      errorOnExist: true,
      force: false,
    });
    console.log('The folder was copied successfully!');
  } catch (err) {
    if (err.code === 'ENOENT' || err.code === 'ERR_FS_CP_EEXIST') {
      throw new Error('FS operation failed');
    } else {
      console.error(err);
    }
  }
};

await copy();
