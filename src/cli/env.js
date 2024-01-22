import { env } from 'node:process';

const parseEnv = () => {
  let resArr = [];

  for (let key in env) {
    if (key.startsWith('RSS_')) {
      resArr.push(`${key}=${env[key]}`);
    }
  }

  console.log(resArr.join('; '));
};

parseEnv();
