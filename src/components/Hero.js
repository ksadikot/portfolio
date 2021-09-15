import React from 'react';
import { Container, Jumbotron, Row, Col } from 'react-bootstrap';

function Hero(props) {
    
    return (
        <Jumbotron className="bg-transparent jumbotron-fluid p-0">
            <Container fluid>
                <Row className="justify-content-center py-5">
                    <Col md={8} sm={12}>
                        { props.title && <h1 className="display-4 font-weight-bolder">{props.title}</h1> }
                        { props.subtitle && <h3 className="display-6 font-weight-light">{props.subtitle}</h3> }
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
    );
}

export default Hero;