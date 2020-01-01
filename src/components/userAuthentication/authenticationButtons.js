import React, { useState } from 'react'; //in order to consume context need to import useContext from React, don't forget!
import styled from 'styled-components';
import {withRouter} from 'react-router-dom';
import { Container, Col, Row } from 'styled-bootstrap-grid';
//the actual data that will be consumed

const StyledContainer= styled.div`
  align-items: center;
  border-radius: 5px;
  background: #6d658f;
  width: 100%;
  padding: 40px;
  text-decoration: none;
  box-shadow: -20px -20px 0px 0px rgba(100,100,100, 0.1);
  `;

const Spacing= styled.div`
  margin: 10px;
  background-color: red;
`;

const Separator = styled.div`
  background-color: #9485d4;
  width: 100%;
  margin-top: 10px;
  height: 1px;
`

const SurveyDashboard = (props) => {
  const [userState, setUserState] = useState(null);
  let buttons;

  const logout = () => {
    console.log('user is loged out')
    }


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
