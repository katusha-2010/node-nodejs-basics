import * as fs from "fs";
import * as path from "path";
import { dirname } from "path";
import { fileURLToPath } from "url";
import { access } from "fs/promises";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function isExist(pathToItem) {
  try {
    await access(pathToItem);
    return true;
  } catch (error) {
    return false;
  }
}

const read = async () => {
  const pathToFile = path.join(__dirname, "files", "fileToRead.txt");
  try {
    if (!(await isExist(pathToFile))) {
      throw Error("FS operation failed");
    } else {
      const readableStream = fs.createReadStream(pathToFile);
      readableStream.pipe(process.stdout);
    }
  } catch (error) {
    console.log(error);
  }
  // Write your code here
};

await read();
