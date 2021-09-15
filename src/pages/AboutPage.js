import React from 'react';
import Content from '../components/Content';
import Hero from '../components/Hero';
import AbMeimg from '../AbMeimg.jpg'
import { Container, Row, Col } from 'react-bootstrap';

function AboutPage(props) {

    return (

        <div>
            <Hero title={props.title} />

            <Content>
            Hi I’m Kaid Sadikot, a current Computer Science major at the University of Guelph. I am in my 3rd year at the university and am looking for a 2021 summer co-op opportunity. My passion for development began in my 2nd year at the university, some might consider that late but coming into my 1st year like many others I was unsure of my path and had no real drive in my field of study. It was then after 1 year of programming and entering my 2nd year where the challenges I faced in my classes began to become an obsession, where instead of thinking about lifes infinite questions in the shower I was thinking about how to fix the infinite loop in my program. Thus began my passion for coding and developing applications that would challenge me. Currently I have focused myself on Front-end development learning the intricacies of javaScript and beginning my journey as a React Developer. I strive to bring dedication and a willingness to learn in any role I take. My development journey has just begun and I hope to make a real impact in my future career as a developer.
            </Content>

            <br/>

            <Container fluid="lg w-50" >
                <Row className="justify-content-center">
                    <Col md={8} sm={12}>
                        <img src={AbMeimg} className="img-fluid img-thumbnail"  alt="About me image" />
                    </Col>
                </Row>
            </Container>
        </div>
    );


}

export default AboutPage;