import { Worker } from 'node:worker_threads';
import path from 'node:path';
import os from 'os';
import { getDirectoryAbsolutePath } from '../utils.js';

const __dirname = getDirectoryAbsolutePath(import.meta.url);

const workerFilePath = path.join(__dirname, 'worker.js');

const fibonacciWorkerService = (workerData) => {
  return new Promise((resolve) => {
    const worker = new Worker(workerFilePath, { workerData });

    worker.on('message', (data) =>
      resolve({
        status: 'resolved',
        data,
      })
    );
    worker.on('error', () => resolve({ status: 'error', data: null }));
  });
};

const performCalculations = async () => {
  const numThreads = os.cpus().length;
  const startsFrom = 10;
  const promises = [];

  for (let i = 0; i < numThreads; i++) {
    promises.push(fibonacciWorkerService(startsFrom + i));
  }

  const results = await Promise.all(promises);

  console.log(results);
};

await performCalculations();
