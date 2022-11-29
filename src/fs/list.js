import * as path from "path";
import { dirname } from "path";
import { fileURLToPath } from "url";
import { access, readdir } from "fs/promises";

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

const list = async () => {
  const pathToFolder = path.join(__dirname, "files");
  try {
    if (!(await isExist(pathToFolder))) {
      throw Error("FS operation failed");
    } else {
      const folderContent = await readdir(pathToFolder);
      for (let item of folderContent) {
        process.stdout.write(`${item}\n`);
      }
    }
  } catch (error) {
    console.log(error);
  }
  // Write your code here
};

await list();
