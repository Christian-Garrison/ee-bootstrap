# Project-Title

## How to get started:

- Install all workspace extension recommendations

- To ensure your workspace recognizes the sftp config use `cmd + shift + p` and run `SFTP: Config`

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
     3. **prettier:** used to format / prettify code in a clean and consistent way
     4. **stylelint:** error / format linting for clean and consistent stylesheets

## How to Setup [ee-bootstrap] for local development

1. Ensure you have both **php** and **mysql** installed
   1. `brew search php` / `brew search mysql`
   2. `brew install php` / `brew install mysql`
2. Using the PHP Server extension we can host our installation via `ctrl + shift + p` and searching for `PHP Server: Serve project`
3. Navigate to [admin.php](http://localhost:3000/admin.php) and begin setup
   1. It is essential at this part to have a great way to save your EE login and your Database credentials, I suggest using a private vault in 1Password
   2. At this step use your email and set username as `admin` and create a unique password
4. You will need two tools to get started with database creation during the setup
   1. [MySQL Community Server](https://tableplus.com/download) - used to host local MySQL Server
   2. [TablePlus](https://dev.mysql.com/downloads/mysql/) - used for connection to MySQL Server and to create your database
5. Using MySQL Community Server you can Initialize the Database
   1. Go to your machines `System Preferences` and at the bottom you should see MySQL
   2. Open it up and hit `Initialize Database`
   3. Save your username and password during the initialization and continue to the next step
6. In TablePlus you should now be able to add a connection to the database following this image below  
   ![image](https://user-images.githubusercontent.com/75394049/145092595-993fe21a-dee4-44a2-beae-8a942a5bfde2.png)
7. Follow the next few images to create the database and name you'll enter for the EE Installation  
   ![image](https://user-images.githubusercontent.com/75394049/145094511-26600791-39e2-4ade-a266-d71664b090fc.png)  
   ![image](https://user-images.githubusercontent.com/75394049/145094513-64c5a11d-528f-487c-8a78-82cad894e0e8.png)  
   ![image](https://user-images.githubusercontent.com/75394049/145094698-9526215e-51c5-4c11-a45f-ca9dc2e64846.png)

## Additional Notes

- ee-bootstrap is up-to-date as of December 6th, 2021
