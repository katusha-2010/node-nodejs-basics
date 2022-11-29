import * as path from "path";
import { dirname } from "path";
import { fileURLToPath } from "url";
import { access, rename } from "fs/promises";

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

const renameFunc = async () => {
  const pathToFile = path.join(__dirname, "files", "wrongFilename.txt");
  const pathToRenamedFile = path.join(__dirname, "files", "properFilename.md");

  try {
    if (
      (await isExist(pathToRenamedFile)) === true ||
      (await isExist(pathToFile)) === false
    ) {
      throw Error("FS operation failed");
    } else {
      await rename(pathToFile, pathToRenamedFile);
    }
  } catch (error) {
    console.log(error);
  }
  // Write your code here
};

await renameFunc();
