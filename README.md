# WareHelper

This repository contains the code for my solution to Reaktor's assignment for junior developers for Spring 2021.    
The application is currently running on [Heroku](https://rocky-falls-72380.herokuapp.com/).

## Assignment brief

The brief was to create a simple product listing app for warehouse workers:
> Your client is a clothing brand that is looking for a simple web app to use in their warehouses. To do their work efficiently, the warehouse workers need a fast and simple listing page per product category, where they can check simple product and availability information from a single UI.

The focus of the assignment was on creating an app that works with two non-optimal [legacy APIs](http://bad-api-assignment.reaktor.com/). My response to the brief is **WareHelper**, a React web app built with JavaScript. Beyond working with the API, I was also interested in learning to use a React component library and decided to build my project using the React Bootstrap front-end framework. As an extra feature, I implemented a React Bootstrap based pagination that works together with the React router.

## Built with

* [create-react-app](https://github.com/facebook/create-react-app) - Set up a modern web app by running one command.
* [React Bootstrap](https://react-bootstrap.github.io/) - Bootstrap components built with React.
* [Axios](https://github.com/axios/axios) - Promise based HTTP client for the browser and node.js.
* [Lodash](https://github.com/lodash/lodash) - A JavaScript utility library delivering consistency, modularity, performance, & extras.  

## Tests and code style

Automated tests have been written for some of the components with [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) and [Jest](https://github.com/facebook/jest) and can be run with the `npm test` command. The application code follows the [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript) with [ESLint](https://eslint.org/). 

