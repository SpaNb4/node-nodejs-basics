import { stdin, stdout } from 'node:process';
import { pipeline } from 'node:stream/promises';
import { Transform } from 'node:stream';

const reverseString = new Transform({
  transform(chunk, _encoding, callback) {
    callback(null, chunk.toString().split('').reverse().join(''));
  },
});

const transform = async () => {
  await pipeline(stdin, reverseString, stdout);
};

await transform();
