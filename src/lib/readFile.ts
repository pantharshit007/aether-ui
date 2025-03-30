import { readFileSync } from "fs";

/**
 * read the file path and returns the code content from it
 * @param path
 * @returns - {string}
 */
export const readCode = (path: string) => {
  const fileContent = readFileSync(path, "utf-8");
  return fileContent;
};
