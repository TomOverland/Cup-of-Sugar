# Cup of Sugar

## Description:

[Live Website](#).  
Full stack CRUD application that uses React and Tailwind.CSS for the front-end, and Node, Express.js, Sequelize, and MySQL for the back-end. This application was built as a capstone project for the University of Minnesota Full-Stack Web Development Bootcamp by a cohort consisting of Tom Overland, Nina Koller, Stephanie Tomlin, Alexander McDonald, and Nou Vang.  This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

This website is a peer to peer rental application where users can post, rent, update, and delete items.  For users to use the website, they must first create an account by signing up with Auth0 authentication (There is a known error where if the user signs in through Google, they will not get a valid JSON Web Token.  Please "sign-up" with your google account). Once signed in, the user will be able to view rentable items in their area. The user will also be able to post a new item using the "Post an Item" link in the side nav-menu.  After the user has posted an item, they can view a list of the items that belong to them which are rentable by viewing the "My Listings" link in the side nav-menu.

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Technology Used](#technology-used)
- [Built With](#built-with)
- [License](#license)
- [Contact](#contact)


## Installation:

#### Step 1 - Make sure you have a code editor, MySQL Node.js, and Node Package Manager installed

The code editor I used was Visual Studio Code. It can be found [here](https://code.visualstudio.com/download).  
Node.js and NPM download can be found [here](https://nodejs.org/en/).  
MySQL can be found [here](https://www.mysql.com/downloads/).

#### Step 2 - Clone our repository

In your command terminal, type the following to clone this repository: "git clone https://github.com/TomOverland/Cup-of-Sugar.git"

#### Step 3 - Move to the correct directory

Once you are in the directory that you downloaded Cup of Sugar into, type the following in your command line: "cd Cup-of-Sugar.git"

#### Step 4 - Install NPM dependencies

By typing "npm install" you will download all of the dependencies required for this application.

#### Step 5 - Create your MySQL Database

#### Step 6 - Create your Config file

#### Step 7 - Create your Auth0 and Formspree accounts

#### Step 8 - Start the application
Start the application by typing "npm run start" in your CLI. This will prompt Sequelize to create the item and user tables in your database. 
This command will concurrently start the web application on localhost:3000 and the backend server on localhost:3001.
We've included a seed file if you'd like to seed information. Type "npm run seed" to store several users and items into your database.

## Technology used
#### Back-End

* Node.js - Used to install dependencies and to make command line scripts.
* Express - Used in conjunction with MongoDB to create the backend of the website.
* MySQL - Used as our Database
* Sequelize - ORM used to communicate with MySQL
* JawsDB - Used to connect MySQL to Heroku
* Heroku - Used to host our application

#### Front-End

* React - Used to create components and the front end of the website
* JSX - Used in conjunction with React to create the front end of the website
* CSS 3 - Used to style the website
* Tailwind CSS - Used to structure the design of the site
* Axios - Used to make API calls to our server
* Auth0 - Used to authenticate users
* Formspree - Used to handle form submissions

## Built With

* VS Code - https://code.visualstudio.com/

## License:

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

For more information about the license, click the link below:

- [License](https://opensource.org/licenses/)

## Contributing:

If you would like to contribute to our project, please create a new branch for the pull request.  Once it has been submitted, we will review!

## Tests:

This application was not developed with any tests.

## Contact:

For more information about the application, please reach out to us!

Tom Overland
[GitHub](https://github.com/TomOverland)
[LinkedIn](www.linkedin.com/in/thomasoverland)

Nina Koller
[Github](https://github.com/nckoller)
[LinkedIn](https://www.linkedin.com/in/nina-koller-82b1994b/)

Alexander McDonald
[Github](https://github.com/acm4219)
[LinkedIn](https://www.linkedin.com/in/alexander-mcdonald-80b52a166/)

Steph Tomlin
[Github](https://github.com/StephTomlin86)
[LinkedIn](https://www.linkedin.com/in/stephanie-tomlin-935531145/)

Nou Vang
[Github](https://github.com/nomvaa)
[LinkedIn](http://linkedin.com/in/nou-m-vang-8a766166)
