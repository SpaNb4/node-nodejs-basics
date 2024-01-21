const parseArgs = () => {
  const resArr = [];
  const args = process.argv.slice(2);

  for (let i = 0; i < args.length; i += 2) {
    if (args[i].startsWith('--')) {
      resArr.push(`${args[i].slice(2)} is ${args[i + 1]}`);
    }
  }

  console.log(resArr.join(', '));
};

parseArgs();
