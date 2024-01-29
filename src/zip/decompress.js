import fs from 'node:fs';
import { pipeline } from 'node:stream/promises';
import { createUnzip } from 'node:zlib';
import path from 'node:path';
import { getDirectoryAbsolutePath } from '../utils.js';

const __dirname = getDirectoryAbsolutePath(import.meta.url);

const sourceFilePath = path.join(__dirname, 'files', 'archive.gz');
const destinationFilePath = path.join(__dirname, 'files', 'fileToCompress.txt');

const decompress = async () => {
  const gzip = createUnzip();
  const sourceStream = fs.createReadStream(sourceFilePath);
  const destinationStream = fs.createWriteStream(destinationFilePath);

  await pipeline(sourceStream, gzip, destinationStream);
};

await decompress();
