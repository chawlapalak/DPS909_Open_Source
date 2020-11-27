let path = require('path');
let exec = require('child_process').exec;

test('version should be correct', async () => {
  let result = await  cli(['-v'], '.');
  expect(result.stdout).toBe('0.0.1\n');
})

test('Code should be 0 for file processing', async () => {
    let result = await  cli(['-f', 'test.txt'], '.');
    expect(result.code).toBe(0);
})

test('Code should be 0 for file processing with all option', async () => {
    let result = await  cli(['-f', 'test.txt', '--all'], '.');
    expect(result.code).toBe(0);
})

test('Code should be 0 for file processing with good option', async () => {
    let result = await  cli(['-f', 'test.txt', '--good'], '.');
    expect(result.code).toBe(0);
})

test('Code should be 0 for file processing with bad option', async () => {
    let result = await  cli(['-f', 'test.txt', '--bad'], '.');
    expect(result.code).toBe(0);
})

test('Code should be 0 for file processing and ignore file', async () => {
    let result = await  cli(['-f', 'test.txt', '-i', 'ignoreUrlList.txt'], '.');
    expect(result.code).toBe(0);
})

test('Status code should be 200', async () => {
  let result = await  cli(['-f', '200.txt'], '.');
  expect(result.stdout).toEqual('file: 200.txt\n' +
        '\x1B[32m\x1B[1mGOOD , Status : 200 http://www.abracadabra.com\x1B[22m\x1B[39m\n' +
        'Finished checking all the URLs with end code 0\n');
})

test('Status code should be 404', async () => {
  let result = await  cli(['-f', '404.txt'], '.');
  expect(result.stdout).toEqual('file: 404.txt\n' +
  '\x1B[31m\x1B[1mBAD , Status : 404 https://httpstat.us/404\x1B[22m\x1B[39m\n' +
  'Finished checking all the URLs with end code 0\n');
})
function cli(args, cwd) {
  return new Promise(resolve => { 
    exec(`node ${path.resolve('./index')} ${args.join(' ')}`,
    { cwd }, 
    (error, stdout, stderr) => { resolve({
    code: error && error.code ? error.code : 0,
    error,
    stdout,
    stderr })
  })
})}