import * as path from "path";
import { dirname } from "path";
import { fileURLToPath } from "url";
import { access, readdir, cp, mkdir, copyFile } from "fs/promises";

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

const copy = async () => {
  const pathToFolder = path.join(__dirname, "files");
  const pathToFolderCopy = path.join(__dirname, "files_copy");
  try {
    if (
      (await isExist(pathToFolder)) === false ||
      (await isExist(pathToFolderCopy)) === true
    ) {
      throw Error("FS operation failed");
    } else {
      const folderContent = await readdir(pathToFolder);
      await mkdir(pathToFolderCopy);

      for (let item of folderContent) {
        await copyFile(
          path.join(__dirname, "files", `${item}`),
          path.join(__dirname, "files_copy", `${item}`)
        );
      }
    }
  } catch (err) {
    console.log(err);
  }
  // Write your code here
};

copy();
