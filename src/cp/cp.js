import { fork } from 'node:child_process';
import path from 'node:path';
import { getDirectoryAbsolutePath } from '../utils.js';

const __dirname = getDirectoryAbsolutePath(import.meta.url);

const childFilePath = path.join(__dirname, 'files', 'script.js');

const spawnChildProcess = async (args) => {
  fork(childFilePath, args);
};

const someArgument1 = 'qwerty';
const someArgument2 = 222;

spawnChildProcess([someArgument1, someArgument2]);
