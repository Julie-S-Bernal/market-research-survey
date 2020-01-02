import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { Container, Col, Row } from 'styled-bootstrap-grid';

import firebaseConfig from '../../firebaseConfig'

const Login = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState(false);

  const login = async(event) => {
    event.preventDefault();
    let response = await firebaseConfig.login(email, password);
    if(response.hasOwnProperty('message')){
      setLoginError(true)
    }
    if(response.hasOwnProperty('user')){
      props.history.push('/')
    }
  }

  return (
    <Container>
      <Row>
        <Col col={12}>
          <form onSubmit={login}>
             <h1>Sign into your account</h1>
             <label htmlFor='email'>Email: </label>
             <input type="email" name='email' onChange={(event) => setEmail(event.target.value)} ></input>
             <label htmlFor='email'>Password: </label>
             <input type="password" name='password' onChange={(event) => setPassword(event.target.value)} ></input>
             <input type='submit' value='login' />
             {loginError && <span>Something went wrong! (╥_╥) </span>}
          </form>
        </Col>
      </Row>
    </Container>
  )
}
export default withRouter(Login);
