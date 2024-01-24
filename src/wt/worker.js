import { parentPort, workerData } from 'node:worker_threads';

const nthFibonacci = (n) => (n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2));

const sendResult = () => {
  // This function sends the result of nthFibonacci computations back to the main thread
  const result = nthFibonacci(workerData);
  parentPort.postMessage(result);
};

sendResult();
