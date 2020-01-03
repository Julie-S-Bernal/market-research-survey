## To run pull branch and do npm start

## Objectif
Create an app that displays coherently 3 different types of surveys and show them into meaningful charts

## Side objectif
Use React hooks + firebase

## Remaining to do
Add tests
Improve the layout of the pie chart
Make different pages per surveys
mobile-responsiveness
Error handling
user-session. main page should not be visible when not logged in.
color-code question and chart that are related to a same topic rather than having one generic style

## Final project

<image to be added>

#Process
## Solution 1

<image to be added>
  
This will be a single app application that will have a usser session and a main page where the user will be able to view all the information.
  
User authentication
The user lands on the page and is asked to either login or register if not authenticated. Once the user is logged they should be redirect to the main page. If the user logout the main page should not be available anymore. 

main Page
On the main page data will be displayed as pie chart to clearly highlight which choice was propertionally greater. The user should be able to also view the questions, answer and amount of respondent.

Error handling
If the user has wrong credentials he should not be able to log in
If the user does not input a correct email he should not be able to log in
If for some reason the api is down the char should be replaced by an error message
If a route is not valid an error should be shown with a button so the user cna be redirected

## Test with jest

Login
Check that on log in user is redirect to / page
Check that an error is thrown if user enters wrong credentials

Register
Check that on registe user is redirect to / page
Check that an error is thrown if user enters wrong credentials

Main page
Check that data is rendered in right fields
Check that api call is made once on page load


Wireframe:

<image to be added>



This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
