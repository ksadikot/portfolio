import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Content(props) {
    return(

        <Container fluid>
            <Row className="justify-content-center">
                <Col  md={8}>
                    {props.children}
                </Col>
            </Row>
        </Container>

    );
}

export default Content