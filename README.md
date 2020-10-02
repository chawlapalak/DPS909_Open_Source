# URL-Inspector
This is a command line interface tool to check different URLs and detect if they are good or bad or unknown.

# Instalation
npm i -g https://github.com/chawlapalak/Url-Inspector

# Usage
* Search and check URLS
    url-inspector -f or --file filename
* Help
    url-inspector -h or --help
* Version
    url-inspector -v or -V or --version

# Features
* It displays URLS in the following colors
    * Good or Status 200 is displayed in green
    * Bad or Status 400 or 404 is displayed in red
    * Unknown status is displayed in gray
* It displays the toolname along with its current version with the following command
    url-inspector -v or -V or --versin
* Network code is optimized to only request headers instead of full bodies
* Additional support is available for timeouts





