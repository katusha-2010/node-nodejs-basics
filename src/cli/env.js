const parseEnv = () => {
  const variables = process.env;
  for (let key in variables) {
    if (key.includes("RSS_")) console.log(`${key} = ${variables[key]}`);
  }
  // Write your code here
};

parseEnv();
