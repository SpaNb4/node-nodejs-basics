import { Worker } from 'node:worker_threads';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import os from 'os';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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
