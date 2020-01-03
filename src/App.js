import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import { createGlobalStyle } from "styled-components";

import Register  from './components/userAuthentication/Register';
import Login  from './components/userAuthentication/Login';
import UserDashboard from './components/survey/UserDashboard';


const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');

  body{
    padding-top:80px;
    font-family: 'Roboto', sans-serif;
    background: #0f0c29;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #24243e, #302b63, #0f0c29);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #24243e, #302b63, #0f0c29); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  .nav ul {
    list-style: none;
    text-align: center;
    white-space: nowrap;
    padding-right: 32px;
  }

  .nav ul li {
    display: inline-block;
  }

  .nav ul li a {
    font-family: soleil, sans-serif;
    font-weight: 100;
    font-size: 25px;
    color: white;
    padding: 19px 16px;
    transition: background 0.4s, text-shadow 0.4s;
    cursor: pointer;
  }

  h1 {
   color: white;
   font-family: 'Roboto', sans-serif;
  }
  h2 {
    color: #d1a6de;
    font-family: 'Roboto', sans-serif;
  }
  h3 {
    color: white;
    font-size: 1.4em;
    font-family: 'Roboto', sans-serif;
  }
  p {
    color: white;
    margin: 0;
    font-size: 1em;
    font-family: 'Roboto', sans-serif;
   }
  span {
    color: #f04397;
    font-weight: bold;
    font-size: 1.2em;
    font-family: 'Roboto', sans-serif;
  }

  button {
    box-shadow: 0 4px 15px 0 rgba(116, 79, 168, 0.75);
    height: 35px;
    width: 100px;
    position: relative;
    overflow: hidden;
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: white;
    background: rgba(59,173,227,1);
    background: linear-gradient(45deg, rgba(59,173,227,1) 0%, rgba(87,111,230,1) 25%, rgba(152,68,183,1) 51%, rgba(255,53,127,1) 100%);
    font-size: 12px;
    border: none;
    margin-left: 10px;
    border-radius: 3px;
    text-align: center;

    span {
      position: relative;
      top: 16px;
    }
  }
  label {
    color: white;
    font-family: 'Roboto', sans-serif;
  }
}`

const App = () => {

    return(
      <>
        <GlobalStyles />
        <Router>
          <Switch>
            <Route exact path="/" component={UserDashboard} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
          </Switch>
         </Router>
      </>
    )
  }

export default App;
