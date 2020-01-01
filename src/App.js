import React from 'react';
import { Route } from 'react-router-dom'
import { createGlobalStyle } from "styled-components";

import { AuthenticationProvider } from './Authentication';
import AuthenticatedRoute from './utils/authenticatedRoute'

import Register  from './components/login/Register';
import Login  from './components/login/Login';
import SurveyDashboard  from './components/survey/SurveyDashboard';


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
        <AuthenticationProvider>
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login}/>
            <AuthenticatedRoute exact path="/" component={SurveyDashboard}/>
        </AuthenticationProvider>
      </>
    )
  }

export default App;
