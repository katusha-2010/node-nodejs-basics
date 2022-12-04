import { createGzip } from "zlib";
import * as fs from "fs";
import * as path from "path";
import { dirname, resolve } from "path";
import { fileURLToPath } from "url";

const compress = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const pathToFile = path.join(__dirname, "files", "fileToCompress.txt");
  const pathOutFile = path.join(__dirname, "files", "archive.gz");

  const readablStream = fs.createReadStream(pathToFile);
  const writableStream = fs.createWriteStream(pathOutFile);
  const gzip = createGzip();
  readablStream.pipe(gzip).pipe(writableStream);

  // Write your code here
};

await compress();
