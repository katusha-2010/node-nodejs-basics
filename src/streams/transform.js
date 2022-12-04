import * as fs from "fs";
import * as path from "path";
import { stdout } from "process";
import { Transform } from "stream";

const transform = async () => {
  const reverseFunc = new Transform({
    transform(chunc, enc, callback) {
      callback(null, chunc.toString().split("").reverse().join(""));
    },
  });

  process.stdin.pipe(reverseFunc).pipe(stdout);
  // Write your code here
};

await transform();
