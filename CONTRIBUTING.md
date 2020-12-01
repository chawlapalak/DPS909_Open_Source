# Installation

npm i https://github.com/chawlapalak/Url-Inspector

# Usage

- Search and check URLs<br>
  url-inspector -f or --file <filename>
  
- Help<br>
  url-inspector -h or --help
  
- Version<br>
  url-inspector -v or -V or --version
  
- All URLs display<br>
  url-inspector --all
  
- Good URLs display<br>
  url-inspector --good
  
- Bad URLs display<br>
  url-inspector --bad
  
- Ignore URLs option<br>
  url-inspector -i <filename> -f <filename> or --ignore <filename> --file <filename>
  
- Use ESLinter (Add on in VSCode as "Prettier - Code formatter")<br>
  npx eslint yourfile.js
  
- Use Prettier (Add on in VSCode as "ESLint") <br>
  Check all files: npx prettier --check . <br>
  Check single file: npx prettier --check filename<br>
  Check and Update all files at once: npx prettier --write .<br>
  Check and Update one file at once: npx prettier --write filename<br>
  
- Testing<br>
  Testing is done using Jest: https://jestjs.io/<br>
  Use this command to install Jest: npm install --save-dev jest<br>
  Run a single test file: npm run test moduleName.test.js<br>
  Run all tests: npm run test<br>
  Test coverage can be checked : npm run coverage or jest --coverage<br>
