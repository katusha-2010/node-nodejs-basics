import { sep } from "path";
import { release, version } from "os";
import { createServer as createServerHttp } from "http";
import * as fileC from "./files/c.js";
import { createRequire } from "node:module";
const require = createRequire(import.meta.url);

const fileA = require("./files/a.json");
const fileB = require("./files/a.json");

import { dirname } from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const random = Math.random();

let unknownObject;

if (random > 0.5) {
  unknownObject = fileA;
} else {
  unknownObject = fileB;
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${sep}"`);

console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

const myServer = createServerHttp((_, res) => {
  res.end("Request accepted");
});

const PORT = 3000;

console.log(unknownObject);

myServer.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
  console.log("To terminate it, use Ctrl+C combination");
});

export default {
  unknownObject,
  myServer,
};
