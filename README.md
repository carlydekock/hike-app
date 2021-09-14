# Hike Finder

Author: Carly Dekock

Link to GitHub repo [here](https://github.com/carlydekock/hike-app)

Deployed Link: **TODO**

## Application Info

- Hike Finder is an authenticated hiking trails API.
- First, a user must sign in or create an account through Auth0 to gain access to the site.
- Then, a user will have access to the database of local hiking trails.
- Users can view and add to the database, as well as update hike information or remove no longer accessible hikes.
- Can view trip reports from other users on current trail conditions, and can leave trip reports themselves.
- Has a listing of all hikes in the database, and a user's contributed hikes.

## What You Need

- Auth0 account
- **Server side** .env file should contain:
  - PORT
  - PGUSER
  - PGPASSWORD
  - PGDATABASE
  - PGPORT
  - REACT_APP_AUTH0_DOMAIN
  - REACT_APP_AUTH0_CLIENT_ID
  - CLIENT_ORIGIN
  - REACT_APP_AUTH0_AUDIENCE
- **Client side** .env file should contain:
  - REACT_APP_AUTH0_DOMAIN
  - REACT_APP_AUTH0_CLIENT_ID
  - REACT_APP_AUTH0_AUDIENCE
- Other dependencies:
  - **Server side**: axios, body-parser, cors, dotenv, express, express-jwt, express-jwt-authz, jwks-rsa, helmet, morgan, nodemon, pg
  - **Client side**: axios, react, react-dom, react-router-dom, @auth0/auth0-react

## How To Use

1. The home screen will prompt you to login.
![Home Screen To Login](img/HikeFinder_Home_NotLoggedIn.png)

1. Once you click login, fill in your credentials or click Sign Up on the Auth0 login screen.
![Auth0 Login](img/HikeFinder_AuthLogin.png)

1. Once you've successfully logged in or signed up, you'll be brought to the home screen where you can view hikes information.
![Home Screen](img/HikeFinder_Home_LoggedIn.png)

## Resources

- FreeCodeCamp tutorial on building a fullstack application [here](https://www.youtube.com/watch?v=J01rYl9T3BU)
- Auth0 documentation and QuickStart guide for React [Single-Page-App](https://auth0.com/docs/quickstart/spa/react)
- React and Auth0 Crash Course and Workshop [video](https://www.youtube.com/watch?v=PYWS-4CXETw&ab_channel=Auth0) by Auth0
- Auth0 SDK for React Single Page Apps [info and docs](https://auth0.github.io/auth0-react/)
- Setting up React context to share user info across site [article](https://www.digitalocean.com/community/tutorials/how-to-share-state-across-react-components-with-context)

## Tech Used

React, Node.js, Auth0, PostgreSQL, Bootstrap