import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

const HomePage = () => (
  <Row>
    <Col>
      <Container>
        <h1>Welcome to WareHelper</h1>
        <p>Start by choosing a product category above.</p>
        <hr />
        <p>
          <i>
            This is a product listing app for warehouse workers utilizing an
            {' '}
            <a href="http://bad-api-assignment.reaktor.com/">API</a>
            {' '}
            provided by Reaktor.
            <br />
            The application is built using create-react-app and the
            {' '}
            <a href="https://react-bootstrap.netlify.app/">React Bootstrap</a>
            {' '}
            framework.
            <br />
            The source code of the project can be found on
            {' '}
            <a href="https://github.com/marihirvi/warehelper">GitHub</a>
            .
          </i>
        </p>
      </Container>
    </Col>
  </Row>
);

export default HomePage;
