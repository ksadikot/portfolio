import React from 'react';
import { Card, Container, Image, Accordion, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button'
import Hero from '../components/Hero'
import FrontPage from '../images/FPD-FP.png'
import MajorPage from '../images/MajorPage.png'
import ExpPage from '../images/ExpPage.png'

function HomePage(props) {

    return (

        <div>

            <Hero title={props.title} subtitle={props.subtitle} />

            <Container fluid="sm">
                <Accordion>
                    <Card>
                        <Card.Header className="text-center">
                            <Accordion.Toggle as={Button} varient="link" eventKey="0">
                                Data Specialist - University of Guelph
                            </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body>
                                <Container fluid>
                                    <Row>
                                        <Col>
                                            <p>In normal circumstances the position I held at the University of Guelph Student Recruitment department would never have existed. The pandemic brought much change to the world and one of those changes was a need for companies to grow their online presence, and the University wasn’t an exception. Student Recruitment thrives on student interaction and the first rule the pandemic taught us was to distance ourselves from others, in a normal year members of Student Recruitment would be a part of the Ontario University Fair, visiting highschools around the province and country but all that had to stop. This is where my role comes in.</p>
                                        </Col>
                                    </Row>
                                    <Row >
                                        <Col>
                                            <p>The main projects I worked on in this role was the development of event websites the University hosted to generate student leads. During the recruitment cycle we had two main events, Discover UofG and Fall Preview Day. Both events feature live webinars from the different departments of the University from academics to student services. </p>
                                            <p>These are a few images of the website developed for Fall Preview Day and Discover UofG. Using Drupal an open source web content management software as well as HTML and CSS to create the look and design of the website.</p>
                                        </Col>
                                        <Col>
                                            <Image src={FrontPage} fluid thumbnail />
                                        </Col>
                                    </Row>
                                    <Row className='top-buffer'>
                                        <Col>
                                            <Image src={MajorPage} fluid thumbnail />
                                        </Col>
                                        <Col>
                                            <Image src={ExpPage} fluid thumbnail />
                                        </Col>
                                    </Row>
                                    <Row className='top-buffer'>
                                        <Col>
                                            <p>The goals I set during my time as a data specialist revolved mainly around front-end development, learning the skills needed to create sophisticated interfaces and provide a high level of user experience when using one of the sites I created. It was important to me as I am focusing myself to become a front-end developer to become proficient with HTML and CSS. This role really forced me to continuously learn and improve my skills with HTML and CSS while creating both the Discover U of G and Fall Preview Day site.</p>
                                        </Col>
                                        <Col>
                                            <p>
                                            As this role has come to an end my pursuit to learn front-end technologies still continues, my current goal is to use the knowledge I have gained from this role to learn JavaScript and its frameworks such as React. Future employers can hope to gain someone proficient in JavaScript and its frameworks, but also someone eager to learn and willing to do anything in the pursuit of achieving their goals. 
                                            </p>
                                        </Col>
                                    </Row>
                                </Container>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
            </Container>
        </div>






    );


}

export default HomePage;