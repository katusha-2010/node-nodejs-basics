import { readFile } from "fs/promises";
import * as path from "path";
import { dirname } from "path";
import { fileURLToPath } from "url";
import { createHash } from "crypto";
import { Buffer } from "node:buffer";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const calculateHash = async () => {
  const pathToFile = path.join(
    __dirname,
    "files",
    "fileToCalculateHashFor.txt"
  );
  const text = await readFile(pathToFile, "utf8");

  const hash = createHash("sha256").update(text).digest("hex");
  console.log(hash);
};

await calculateHash();
