import fs from 'node:fs';
import { stdin } from 'node:process';
import { pipeline } from 'node:stream/promises';
import path from 'node:path';
import { getDirectoryAbsolutePath } from '../utils.js';

const __dirname = getDirectoryAbsolutePath(import.meta.url);

const destinationFilePath = path.join(__dirname, 'files', 'fileToWrite.txt');

const write = async () => {
  const destinationStream = fs.createWriteStream(destinationFilePath);
  await pipeline(stdin, destinationStream);
};

await write();
