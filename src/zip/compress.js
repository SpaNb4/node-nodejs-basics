import fs from 'node:fs';
import { pipeline } from 'node:stream/promises';
import { createGzip } from 'node:zlib';
import path from 'node:path';
import { __dirname } from './utils.js';

const sourceFilePath = path.join(__dirname, 'files', 'fileToCompress.txt');
const destinationFilePath = path.join(__dirname, 'files', 'archive.gz');

const compress = async () => {
  const gzip = createGzip();
  const sourceStream = fs.createReadStream(sourceFilePath);
  const destinationStream = fs.createWriteStream(destinationFilePath);

  await pipeline(sourceStream, gzip, destinationStream);
};

await compress();
