import { createHash } from 'node:crypto';
import { createReadStream } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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
