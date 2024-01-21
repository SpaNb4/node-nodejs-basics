const parseEnv = () => {
  let resArr = [];

  for (let key in process.env) {
    if (key.startsWith('RSS_')) {
      resArr.push(`${key}=${process.env[key]}`);
    }
  }

  console.log(resArr.join('; '));
};

parseEnv();
