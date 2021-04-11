# Design Objective
 Intended to build a platform that allows  the functionality of a modern app where a visitor to the site can perform certain
 functions to manage an application.
 
 
 # Functionality
In this project:

* A visitor can create or log in to an account.
* The user can add a new tweet post to the account or reply to a previous tweet.
* In addition, a visitor can access a list of Users, Tweets, and Replies that was made.


#  Design Principles
I used React-Redux with hooks for my implementation of the project for my frontend, and used 
json-server for my backend.

* React.js
* Redux
* `json-server `

# Structure

This project focuses on the implementation of using React with Redux in functional components. I chose
Redux because managing state values was easier.

* frontend/: The files contained in this folder are my React.js files, Redux, and Axios based API calls

* Server.js: I chose `json-server` as my backend.

In order to achieve my design principles, I created to 3 folders to house my files, so that I can achieve maximum
order of accessibility and orderliness.

* `redux/`: This folder contains all neccessary files to mantain the state of my entire application. I created sub-folders
  in order to maintain clearity and resusable codes.
  
1.  `reducers/`: The folder contains three files `usersReducer/`, `tweetsReducer/`, and `replyReducer/`. In these files I've created
    functions that takes in the initial values of the state, and an action as the second parameter to determine it's change. Included
    in this file there is an index.js/ file that combines all the reducers into one export.
 
2.  `actions/`:  This folders contain three files `usersActions.js/`, `tweetActions.js/`, and `replyActions.js/`. These files creates actions for 
    each reducer.
    
3.  index.js is the file where created the instance of the store 
    
* `components/`: This folder contains all the user interface arrangement of logics.

1.  `Regsiter/` and `Login/`: This component creates a new  user who wants to access the application.

  In the register component, a new visitor to the site is able to create a new account, and access the information
  pertaining to a new users account. If a new euser has been created then the user will be able to log in.
2.  UserList/,
