import React, { useState, useEffect } from 'react'; //in order to consume context need to import useContext from React, don't forget!
import styled from 'styled-components';
import { Container, Col, Row } from 'styled-bootstrap-grid';

import AuthenticationButtons from '../userAuthentication/authenticationButtons'
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

const SurveyDashboard = () => {
  const [data, setDataSet] = useState([]);
  const [hasError, setErrors] = useState(false);


  async function fetchData() {
    const res = await fetch("https://my-json-server.typicode.com/focaldata/demo/db");
    res
      .json()
      .then(res => setDataSet(res))
      .catch(err => setErrors(err));
  }

  useEffect(() => {
    fetchData();
  },[]);


 console.log(data && data)
 console.log(data.surveys)


// this will return the city from the first address item.

  return(
    <Container >
      <Row>
        <Col col={6}>
        <AuthenticationButtons />
        <button className='Environment' >Environment</button>
        <button className='Brexit'>Brexit</button>
        <button className='US'>US Elections</button>
        <div>

        <div>
        {
           data.length != 0 && data.surveys.map(({title, questions}, i) => (
            <div key={i}>
              <div>
                <h1>{title}</h1>
                {console.log('hi', questions.length != 0 && JSON.stringify(questions))}
                <>
                  {questions.map((question, j) => (
                  <div key={j}>
                    <h1>{question.questionId}</h1>
                    <h1>{question.questionTitle}</h1>
                    <>
                    {question.answerOptions.map((answer, questionId, answerOptions, j) => (
                  <div key={j}>
                    <h1>{answer.answerOptions}</h1>
                    <h1>{answer.text}</h1>
                    <h1>Selected by respondent: {answer.selectedByRespondents}</h1>
                  </div>))}
                  </>
                  </div>))}
                  </>
              </div>
            </div>
          ))
        }
       </div>
        </div>
        </Col>
      </Row>
    </Container>
  )
}



export default SurveyDashboard;
