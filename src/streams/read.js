import fs from 'node:fs';
import { stdout } from 'node:process';
import { pipeline } from 'node:stream/promises';
import path from 'node:path';
import { getDirectoryAbsolutePath } from '../utils.js';

const __dirname = getDirectoryAbsolutePath(import.meta.url);

const sourceFilePath = path.join(__dirname, 'files', 'fileToRead.txt');

const read = async () => {
  const sourceStream = fs.createReadStream(sourceFilePath);
  await pipeline(sourceStream, stdout);
};

await read();
