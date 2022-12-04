import { access, writeFile } from "fs/promises";
import { constants } from "fs";
import * as path from "path";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const create = async () => {
  const pathToFile = path.join(__dirname, "fresh.txt");
  try {
    const isExist = await access(pathToFile, constants.R_OK);
    throw Error("FS operation failed");
  } catch (err) {
    if (err.code === "ENOENT") {
      await writeFile(pathToFile, "I am fresh and young");
    } else {
      console.log(err);
    }
  }
  // Write your code here
};

await create();
