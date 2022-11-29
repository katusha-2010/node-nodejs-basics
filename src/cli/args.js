const parseArgs = () => {
  const commandLineArgs = process.argv;
  let result = "";
  let i = 0;
  for (let item of commandLineArgs) {
    if (item.includes("--")) {
      result += `${item.slice(2)} is ${commandLineArgs[i + 1]}, `;
    }
    i++;
  }
  console.log(result.trim().slice(0, -1));
  // Write your code here
};

parseArgs();
