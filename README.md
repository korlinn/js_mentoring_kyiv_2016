

# FOODADVISER APP

FoodAdviser App is s service designed to make healthy eating easy.


# Getting Started


## Installing and configuring

> npm i

Create in project root the file .env and configure it. There must be specified:
1. PORT - port on which the application will be started.
2. MONGOURI - the path to the database store.
An example of .env, see below

> PORT=3000

> MONGOURI=mongodb://dbuser:password@ds044979.mlab.com:44979/foodadviser

Paste your credentials instead of dbuser and password.

Also, in project present file .env.example and you may rename it to .env

Test User:
email: lisentia.ua@gmail.com
password: 12345


## Start All

Start whole project for production.
> npm start


## Build Frontend

For build frontend webpack has used.

1. Build for prodaction.
> npm run front_build

2. Build for development with watch.
> npm run front_watch


## Start server

1. Start server for prosuction.
> npm run server_start

2. Start server for development with watch and in debug mode.
> npm run server_watchdebug


# Description of implementation

## Description of data visualization in application

Data visualization via Canvas presented in Avatar Creator.
This functionality realized in React part of application and accessible for logged in users.

http://localhost:3000/react - select menu item "Avatar"

### Avatar Creator rovides such functionality:
- select eyes
- select nose
- select mouth
- select hair
- select/de-select glasses
- download avatar

### Used technology:
- canvas with 2d context
- react
- redux


## Description of React + Redux part of application

http://localhost:3000/react

### Login functional is implemented:
- login form with material-ui
- react-router
- email and password validation
- forgot-password (mock page)
- authentication flow with backend (using auth service from homework 3)

### Used technology:
- react
- react-router
- redux
- ajax request
- material-ui

## Description of Angular2 part of application

### Where you can find it?

http://localhost:3000/angular

or You can get it from Landing page

http://localhost:3000/ -> Main menu -> What to eat

There are two feature areas with it's own routers:
- Products
- Users

Product feature area has next functions:
- Show all products
- Find products with specific parameters.

There are two cases of using Find products:
1) If user leave empty field "Calories" then it works as finding and showing info about product or group of products (field name is empty and only field category filled up).
2) If user filled up field "Calories" then application will calculated the quantity of each product can be eaten to achieve the desired amount of calories.

Lazy-loading implemented on route http://localhost:3000/angular/admin
Can be reached by - http://localhost:3000/angular/ -> Admin
Admin chunk-file loaded only once at first success attempt.

In application implemented next types of guards:

1) canActivate guard implemented twice:
- on route http://localhost:3000/angular/admin
- on route http://localhost:3000/angular/products/edit/:id
This guard allows activate these routes only for logged in users.

2) canLoad guard - used on route http://localhost:3000/angular/admin
This guard allows to load admin module chunk-file only for logged in users.

3) resolve guard - used on route http://localhost:3000/angular/users/edit/:id
Can be reached by - http://localhost:3000/angular/ -> Users -> press button Edit on User
This guard limits access to edit user profile.
User can edit only his own profile. All other attempts will be rejected.

## Description of Frontend

Landing page can be reached by address - http://localhost:3000/

### There implemented:
- Responsive menu with search bar
- Responsive slider
- Responsive info-block with articles
- Responsive footer with socials

### Used technology :
- Responsive slider with preview
- Different images for desktop and mobile
- 2x images for Retina display
- Flexbox for info-block and other sections
- BEM methodology for styles


## Description of Server

For demo EJS templater is used

For user login local strategy has used - authentication via email and password.
Information about user store in node session.

For testing test-user has created:
email: lisentia.ua@gmail.com
password: 12345


### List of RESTs

- get main page - http://localhost:3000/main
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


