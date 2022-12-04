import * as path from "path";
import { dirname } from "path";
import { fileURLToPath } from "url";
import { access, unlink } from "fs/promises";

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

const remove = async () => {
  const pathToFile = path.join(__dirname, "files", "fileToRemove.txt");
  try {
    if (!(await isExist(pathToFile))) {
      throw Error("FS operation failed");
    } else {
      await unlink(pathToFile);
    }
  } catch (error) {
    console.log(error);
  }
  // Write your code here
};

await remove();
