import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import { createGlobalStyle } from "styled-components";

import Register  from './components/userAuthentication/Register';
import Login  from './components/userAuthentication/Login';
import UserDashboard from './components/survey/UserDashboard';


const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
  body {
    font-family: 'Roboto', sans-serif;
  };
`

const App = () => {

    return(
      <>
        <GlobalStyles />
        <Router>
        <Switch>
            {/* / Add Swicth statement if needed */}
            <Route exact path="/" component={UserDashboard} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
         </Switch>
         </Router>
      </>
    )
  }

export default App;
