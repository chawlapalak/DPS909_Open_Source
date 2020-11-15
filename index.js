#!/usr/bin/env node
const restHandler = require("./utils/restHandler");
const program = require("commander");
const fileHandler = require("./utils/fileHandler");

program
  .version("0.0.1", "-v, -V, --version ", "prints tool version") //user can use any of the command to know the version
  .option("-f, --file <path>", "Path to file")
  .option("--all", "All URLs")
  .option("--good", "Good URLs")
  .option("--bad", "Bad URLs")
  .option("-i, --ignore <path>", "Path to file with URLs to ignore")
  .option("-e, --endpoint <url>", "URL to fetch post list");

program.parse(process.argv);

if (program.ignore && !program.file) {
  console.log("Error: Usage url-inspector -i <path> - f <filepath>");
}

if (program.file) {
  console.log(`file: ${program.file}`);
  const displayOption = program.bad ? "bad" : program.good ? "good" : "all";
  fileHandler.readCheckFile(program.file, program.ignore, displayOption);
}

if (program.endpoint) {
  console.log(`endpoint: ${program.endpoint}`);
  restHandler
    .resFetch(program.endpoint)
    .then(() => {
      fileHandler.readCheckFile("postsUrl.txt", undefined, "all");
    })
    .catch((err) => console.log(err));
}

process.on("exit", function (code) {
  return console.log(`About to exit with code ${code}`);
});
