const { run } = require('./run');

describe('end-to-end integration', () => {
  test('when argument --help is specified should print help message', async () => {
    const { stderr, stdout, exitCode } = await run('--help');
    expect(exitCode).toBe(0);
    expect(stdout).toMatchSnapshot();
    expect(stderr).toEqual('');
  });
});