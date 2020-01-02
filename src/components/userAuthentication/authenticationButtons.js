import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import {withRouter} from 'react-router-dom';


import firebaseConfig from '../../firebaseConfig'

const NavContainer=styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 64px;
  background: rgba(255,255,255,0.4);
  border-bottom: 1px solid rgba(225,225,225,0.5);
  z-index: 1000;
`;


const SurveyDashboard = (props) => {
  const [userState, setUserState] = useState(null);

  useEffect(()=> {
    firebaseConfig.getUser().then(user => {
      if(user){
        setUserState(user);
      }
    })
  })

  const logout = () => {
    firebaseConfig.logout();
    setUserState(null);
    props.history.replace('/login');
  }

    let buttons;

  if (userState != null) {
    buttons = (
      <button className='logout' onClick={logout}>Logout</button>
    )
  } else {
    buttons = (
      <>
        <button className='register' onClick={() => props.history.push('/register')} >Register</button>
        <button className='Login' onClick={() => props.history.push('login')}>Login</button>
      </>
    )
  }

  return(
  <NavContainer>
    <nav>
      <ul class="container">
        {buttons}
      </ul>
    </nav>
  </NavContainer>
  )
}

export default withRouter(SurveyDashboard);
