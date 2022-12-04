import * as fs from "fs";
import * as path from "path";
import { dirname } from "path";
import { exit } from "process";
import { fileURLToPath } from "url";

const write = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const pathToFile = path.join(__dirname, "files", "fileToWrite.txt");

  const writableStream = fs.createWriteStream(pathToFile);
  process.stdin.pipe(writableStream);
  process.on("SIGINT", () => {
    exit();
  });
  // Write your code here
};

await write();
