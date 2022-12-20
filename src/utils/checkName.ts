/* eslint-disable import/prefer-default-export */
import fs from "fs";
import path from "path";

export function checkName(__dirname: string, fileName: string) {
  const exist = true;
  let fileNumber = 0;

  while (exist) {
    if (fs.existsSync(path.resolve(__dirname, `../../output/${fileName}_${fileNumber}.txt`))) {
      fileNumber += 1;
    } else {
      break;
    }
  }

  return fileNumber;
}
