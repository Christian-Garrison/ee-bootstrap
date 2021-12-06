# Project-Title

## How to get started:

- Install all workspace extension recommendations

- To ensure your workspace recognizes the sftp config use `cmd+shift+p` and run `SFTP: Config`

  1. This will initialize the config within your workspace and enable you to fill out the config
  2. Please follow this [Notion](https://www.notion.so/midwesterninteractive/SFTP-Setup-for-Visual-Studio-Code-1e0fde4b5c4c48b2832d024aba68f74c) on how to setup the config correctly

- Assuming you have a default install of nvm through homebrew please follow these steps in order below

  1. `nvm install --lts`
  2. `nvm use --lts`
  3. `nvm alias default 'lts/*'`

- After following the steps above please continue with the next few steps below

  1. update the "name" in package.json to resemble the project title in all lowercase/hyphenated
  2. to ensure all required packages are installed run `npm install`
     1. **gulp:** used to watch and compile/minify all js and scss for reduced bundle size and improved performance
     2. **sass:** support and use of sass/scss within the project
     3. **prettier:** used to format / prettify code in a clean & consistent way
     4. **stylelint:** error / format linting for clean & consistent stylesheets

## Additional Notes

- ee-bootstrap is up-to-date as of December 6th, 2021
