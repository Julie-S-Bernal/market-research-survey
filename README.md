## To run pull branch and do npm start

## Objectif
Create an app that displays coherently 3 different types of surveys and show them into meaningful charts

## Side objectif
Use React hooks + firebase

#Process
## Solution 1

<image to be added>
  
In the second solution we only have one single page that will render the right information based on the user choice. This allows to remove the prior page compage to solution one that does not have much logic. The challenge will lie into making the code clear and structuringi it, We can retain the color coded idea by using 
Conditional rendering and applying a different theme when selected.

Survey:
On click of the survey selector tab the user will be able to select  a survey type. It will update the questiosns and answer below when clicked upon. As well as the pie chart displayed on the right hand side. 

Wireframe:

<image to be added>



Solution 2

<image to be added>

The user lands on a login page that will prompt them to enter their credentials. If they do not have them they will be required to register. Once authenticated they will be redirected to the landing page where they will be able to pick a survey of interest. At any moment they will be able to jump from a type of survey to the other using a navbar. 


Login

The dataset is provided by an API so we do not require a back-end as we are only displaying the data and not interacting with it. We will set up user authentication with Firebase. This way we can easily save our users and their sessions.

Survey page

Survey page will be color-coded to reinforce their different types.  Blue for Brexit, red for USA and green for the environment. They will be composed of 2 main sections. On the right hand, they will display the survey questions and answers. On the left, they will use a pie chart to clearly highlight to the user the answers that were picked for every single category. We will render one pie chart per type of question.

Since the information all has a similar structure we can assume that we will be able to do re-usable components to make the code cleaner.

A future survey would be to allow the user to enter its own data that came from same questions so he could compare it to ours.

Wireframe

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
