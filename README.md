# URL-Inspector
This is a command line interface tool to check different URLs and detect if they are good or bad or unknown.

# Installation
npm i https://github.com/chawlapalak/Url-Inspector

# Usage
* Search and check URLs
    url-inspector -f or --file <filename>
* Help
    url-inspector -h or --help
* Version
    url-inspector -v or -V or --version
* All URLs display
    url-inspector --all
* Good URLs display
    url-inspector --good
* Bad URLs display
    url-inspector --bad

# Features
* It displays URLS in the following colors
    * Good or Status 200 is displayed in green
    * Bad or Status 400 or 404 is displayed in red
    * Unknown status is displayed in gray
* It displays the toolname along with its current version with the following command
    url-inspector -v or -V or --version
* Network code is optimized to only request headers instead of full bodies
* Additional support is available for timeouts
* It displays URLs according to the flags specified
    * All URLs are displayed when --all is specified
    * Bad URLs are displayed when --bad is specified
    * Good URLs are displayed when --good is specified





