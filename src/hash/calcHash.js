import { createHash } from 'node:crypto';
import { createReadStream } from 'node:fs';
import { stdout } from 'node:process';
import { pipeline } from 'node:stream/promises';
import path from 'node:path';
import { getDirectoryAbsolutePath } from '../utils.js';

const __dirname = getDirectoryAbsolutePath(import.meta.url);

const sourceFilePath = path.join(__dirname, 'files', 'fileToCalculateHashFor.txt');

const calculateHash = async () => {
  const hash = createHash('sha256');
  const input = createReadStream(sourceFilePath);

  await pipeline(input, hash.setEncoding('hex'), stdout);
};

await calculateHash();
