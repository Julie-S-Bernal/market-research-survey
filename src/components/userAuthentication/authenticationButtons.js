import React, { useState, useEffect } from 'react';
import {withRouter} from 'react-router-dom';
import { Container, Col, Row } from 'styled-bootstrap-grid';

import firebaseConfig from '../../firebaseConfig'


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
    <Container >
      <Row>
        <Col col={6}>
          {buttons}
        </Col>
      </Row>
    </Container>
  )
}

export default withRouter(SurveyDashboard);
