# FOODADVISER APP

FoodAdviser App is s service designed to make healthy eating easy.


## Getting Started

Installing:
> npm i

Create in project root the file .env and configure it. There must be specified:
1. PORT - port? on which the application will be started.
2. MONGOURI - the path to the database atore/
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


For user login local strategy is used - authentication via email and password. Information about user store in node session.

##List of REST

For demo EJS templater is used

- get homepage - http://localhost:3000/
- get all users - http://localhost:3000/user
- get user by id - http://localhost:3000/user/:id
- add user - http://localhost:3000/user/new
- update user - http://localhost:3000/user/:id
- delete user  - http://localhost:3000/user/:id
- login http://localhost:3000/user/login
- logout http://localhost:3000/user/logout
