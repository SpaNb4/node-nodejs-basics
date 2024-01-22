import fs from 'node:fs';
import { stdout } from 'node:process';
import { pipeline } from 'node:stream/promises';
import path from 'node:path';
import { __dirname } from './utils.js';

const sourceFilePath = path.join(__dirname, 'files', 'fileToRead.txt');

const read = async () => {
  const sourceStream = fs.createReadStream(sourceFilePath);
  await pipeline(sourceStream, stdout);
};

await read();
