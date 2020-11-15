# Installation

npm i https://github.com/chawlapalak/Url-Inspector

# Usage

- Search and check URLs
  url-inspector -f or --file <filename>
- Help
  url-inspector -h or --help
- Version
  url-inspector -v or -V or --version
- All URLs display
  url-inspector --all
- Good URLs display
  url-inspector --good
- Bad URLs display
  url-inspector --bad
- Ignore URLs option
  url-inspector -i <filename> -f <filename> or --ignore <filename> --file <filename>
- Use ESLinter (Add on in VSCode as "Prettier - Code formatter")
  npx eslint yourfile.js
- Use Prettier (Add on in VSCode as "ESLint")
  Check all files: npx prettier --check .
  Check single file: npx prettier --check filename
  Check and Update all files at once: npx prettier --write .
  Check and Update one file at once: npx prettier --write filename