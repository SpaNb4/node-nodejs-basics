import fs from 'node:fs';
import { stdin } from 'node:process';
import { pipeline } from 'node:stream/promises';
import path from 'node:path';
import { __dirname } from './utils.js';

const destFilePath = path.join(__dirname, 'files', 'fileToWrite.txt');

const write = async () => {
  const destStream = fs.createWriteStream(destFilePath);
  await pipeline(stdin, destStream);
};

await write();
