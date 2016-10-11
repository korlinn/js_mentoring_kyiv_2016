# FOODADVISER APP

FoodAdviser App is s service designed to make healthy eating easy.


## Getting Started

Installing:
> npm i

Create in project root the file .env and configure it. There must be specified:
1. PORT - port on which the application will be started.
2. MONGOURI - the path to the database store.
An example of .env, see below

> PORT=3000
> MONGOURI=mongodb://<dbuser>:<password>@ds044979.mlab.com:44979/foodadviser


## Start server


1. simple start
> npm start

2. start with watch
> npm watch

3.  start with watch in debug mode
> npm watchdebug


## Description server

For demo EJS templater is used

For user login local strategy has used - authentication via email and password.
Information about user store in node session.

For testing test-user has created:
email: lisentia.ua@gmail.com
password: 12345


## List of RESTs

- get homepage - http://localhost:3000/
- get all users - http://localhost:3000/user
- get user by id - http://localhost:3000/user/:id
- get form for addition new user - http://localhost:3000/user/new
- add new user - http://localhost:3000/user/register
- get form for user update - http://localhost:3000/user/edit/:id (currently should be tested from REST Client like PostMan)
- update user - http://localhost:3000/user/update/:id (currently should be tested from REST Client like PostMan)
- delete user  - http://localhost:3000/user/del/:id (currently should be tested from REST Client like PostMan)
- het login form - http://localhost:3000/user/login
- authenticate user (perform login) - http://localhost:3000/user/authenticate
- logout user - http://localhost:3000/user/logout
