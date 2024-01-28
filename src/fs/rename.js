import fs from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';
import { getDirectoryAbsolutePath } from '../utils.js';

const __dirname = getDirectoryAbsolutePath(import.meta.url);

const sourceFilePath = path.join(__dirname, 'files', 'wrongFilename.txt');
const destinationFilePath = path.join(__dirname, 'files', 'properFilename.md');

const rename = async () => {
  if (existsSync(destinationFilePath)) {
    throw new Error('FS operation failed');
  }

  try {
    await fs.rename(sourceFilePath, destinationFilePath);
    console.log('The file was renamed successfully!');
  } catch (err) {
    if (err.code === 'ENOENT') {
      throw new Error('FS operation failed');
    } else {
      console.error(err);
    }
  }
};

await rename();
