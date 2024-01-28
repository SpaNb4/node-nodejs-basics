import { createHash } from 'node:crypto';
import { createReadStream } from 'node:fs';
import path from 'node:path';
import { getDirectoryAbsolutePath } from '../utils.js';

const __dirname = getDirectoryAbsolutePath(import.meta.url);

const sourceFilePath = path.join(__dirname, 'files', 'fileToCalculateHashFor.txt');

const calculateHash = async () => {
  const hash = createHash('sha256');

  const input = createReadStream(sourceFilePath);
  input.on('readable', () => {
    const data = input.read();
    if (data) {
      hash.update(data);
    } else {
      console.log(`${hash.digest('hex')}`);
    }
  });
};

await calculateHash();
