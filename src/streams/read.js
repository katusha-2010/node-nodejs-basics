import * as fs from "fs";
import * as path from "path";
import { dirname } from "path";
import { fileURLToPath } from "url";

const read = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const pathToFile = path.join(__dirname, "files", "fileToRead.txt");

  const readablrStream = fs.createReadStream(pathToFile);
  readablrStream.pipe(process.stdout);
  // Write your code here
};

await read();
