#!/usr/bin/env node
const program = require('commander');
const fileHandler = require('./utils/fileHandler');
program
    .version('0.0.1', '-v, -V, --version ', 'prints tool version') 
    //user can use any of the command to know the version
    .option('-f, --file <path>', 'Path to file');
    
program.parse(process.argv);

if (program.file) 
{
console.log(`file: ${program.file}`);
fileHandler.readCheckFile(program.file);
}


