#!/usr/bin/env node

const program = require('commander');
const fileHandler = require('./utils/fileHandler');
program
    .version('0.0.1', '-v, -V, --version ', 'prints tool version') //user can use any of the command to know the version
    .option('-f, --file <path>', 'Path to file')
    .option('--all', 'All URLs')
    .option('--good', 'Good URLs')
    .option('--bad', 'Bad URLs');

program.parse(process.argv);

if (program.file) {
    console.log(`file: ${program.file}`);
    const displayOption = program.bad ? 'bad' : ( program.good ? 'good' : 'all' );
    fileHandler.readCheckFile(program.file, displayOption);
}


