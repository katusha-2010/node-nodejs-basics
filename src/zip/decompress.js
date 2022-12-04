import { createUnzip } from "zlib";
import * as fs from "fs";
import * as path from "path";
import { dirname } from "path";
import { fileURLToPath } from "url";

const decompress = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const pathOutFile = path.join(__dirname, "files", "fileUnzipped.txt");
  const pathToFile = path.join(__dirname, "files", "archive.gz");

  const readablStream = fs.createReadStream(pathToFile);
  const writableStream = fs.createWriteStream(pathOutFile);
  const unGzip = createUnzip();
  readablStream.pipe(unGzip).pipe(writableStream);

  // Write your code here
};

await decompress();
