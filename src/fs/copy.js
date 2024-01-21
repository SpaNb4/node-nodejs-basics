import fs from 'node:fs';
import path from 'node:path';
import { __dirname } from './utils.js';

const sourceFolderPath = path.join(__dirname, 'files');
const destinationFolderPath = path.join(__dirname, 'files_copy');

const copy = async () => {
  fs.cp(
    sourceFolderPath,
    destinationFolderPath,
    {
      recursive: true,
      errorOnExist: true,
      force: false,
    },
    (err) => {
      if (err) {
        if (err.code === 'ENOENT' || err.code === 'ERR_FS_CP_EEXIST') {
          throw new Error('FS operation failed');
        } else {
          throw err;
        }
      } else {
        console.log('The folder was copied successfully!');
      }
    }
  );
};

await copy();
