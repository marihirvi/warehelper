import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'

const HomePage = () => {
    return (
        <Row>
            <Col>
                <Container>
                    <h1>Welcome to WareHelper!</h1>
                    <p>Start by choosing a product category above.</p>
                    <hr />
                    <p><i>This is a . The source code of the application can be found at marihirvi</i></p>
                </Container>
            </Col>
        </Row>
    )
}

export default HomePage;