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
                            <Accordion.Toggle as={Button} varient="link" eventKey="2">
                                Software Developer - CaseWare International
                            </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="2">
                            <Card.Body>
                                <Container fluid>
                                    <Row>
                                        <Col>
                                            <p>CaseWare International is one of the oldest software companies founded in Toronto. It specializes in providing software solutions for accounting, financial, risk and governance professionals. The company was founded in Toronto in 1988 and has seen non stop growth, breaking into the european market in the late 90s then to the asain, and latin americas by early 2000. CaseWare’s solutions are now used in over 130 countries across the world and is a leader in its respective market.</p>
                                        </Col>
                                    </Row>
                                    <Row >
                                        <Col>
                                            <p>My experience at CaseWare as a software developer coop has been a truly transformative experience, but before I delve into my role it is important that I provide more context to my team. During my time at CaseWare, I worked under the hybrid cloud umbrella that housed multiple teams all working in parallel to enhance CaseWare’s cloud platforms. To be specific I worked under the Sherlock squad that were undergoing two major projects. The first is Gold Standard Mapping, which is a web application that allows accounting professionals to perform risk analysis using data they have stored on our cloud systems. This data could be transferable to different regions and groups within a firm allowing data to be accessible throughout an organization. The second project in which I worked more closely on is our business intelligence (BI) platform which would allow users within a firm to create dashboards and analysis through their firm’s data. At CaseWare we use AWS to power our cloud technology, using services such as S3 which is a cloud noSQL database to quicksight which is AWS’s BI tool. </p>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <p>Coming into my team I quickly realized the difference CaseWare’s co-op experience is from many other companies. They put a huge emphasis on learning and developer success. Within the first few months I witnessed my peers in my team who had been at CaseWare for only 4 months prior to me lead feature and project releases, I also quickly began working on minor bug fixes. The opportunities for coops at CaseWare is unlike any other company. I was tasked with full research tickets that would end up leading to features and product releases that make you feel as though the work you complete is meaningful and impactful.</p>
                                        </Col>
                                    </Row>
                                    <Row>
                                    <Col>
                                        <p>My major goal coming into this position was gaining experience working with AWS and its services. Cloud computing was something new for me and being able to work first hand with cloud platforms has been an amazing challenge for my career. Previously I was very interested in pursuing a career in full stack development with the more common tools under my belt such as ASP.NET, SQL, JavaScript and so on but after my time with CaseWare my view has shifted into a role more so as a cloud developer.</p>
                                    </Col>
                                    </Row>
                                    <Row>
                                    <Col>
                                        <p>I hope to continue my career in cloud development, I believe with the knowledge and experience gained working at CaseWare I would make a great fit to any organization that has a focus on cloud computing. My experience at CaseWare has truly been the best professional opportunity of my career.</p>
                                    </Col>
                                    </Row>
                                </Container>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Card.Header className="text-center">
                            <Accordion.Toggle as={Button} varient="link" eventKey="0">
                                Software Developer (IoT) - Molex Canada
                            </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body>
                                <Container fluid>
                                    <Row>
                                        <Col>
                                            <p>My experience at Molex as a software developer in the IoT department is something that will stick with me for the rest of my career. This has been the first opportunity working in a large scale business in a truly agile environment. The skills and knowledge of working on a large scale application has taught me valuable full stack experience as well as the importance of testing and creating automated tests to improve the quality of code output.</p>
                                        </Col>
                                    </Row>
                                    <Row >
                                        <Col>
                                            <p>Before I begin discussing my role at Molex I will explain the application the company has been working on. The IoT department aims to create a web application designed to provision microchip hardware used in assembly line manufacturing. This application was the overview project and all other tasks and projects revolved around adding features as well as improvements to this application.</p>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <p>My major goal coming into this position was gaining experience with full-stack technologies, full-stack development has been an interest for me and a career path I hope to follow. In this role I was able to work with senior developers and assist them on their tasks ranging from back-end to front-end and gain knowledge and hands on experience working with technologies such as ASP.NET, Java, SQL, as well as front-end frameworks such as node, Vuejs and typescript. </p>
                                        </Col>
                                    </Row>
                                    <Row>
                                    <Col>
                                        <p>My most noteworthy project assigned to me was to implement a pagination support component that would replace the current method of displaying user orders which had many limitations. This task required me to work on both front-end as well as back-end to create an elegant solution. I was required to make changes as well as enhance API endpoints by integrating OData to GET requests allowing me to build queries on the fly without extra API calls. Using OData I would filter the data according to each page and display the relevant order data on corresponding page numbers. using Vuetify components to create a pagination support on the front-end that allowed users to flip through pages. This was a very valuable project as I was required to make significant changes to both front-end as well as back-end code, allowing me to gain the technical skills needed to become a proficient full-stack developer.</p>
                                    </Col>
                                    </Row>
                                    <Row>
                                    <Col>
                                        <p>I plan to use these skills in my future terms and experiences only to build on the knowledge I have gained working at Molex. This has been a great opportunity for me and I hope to display my experience and ability to future employers</p>
                                    </Col>
                                    </Row>
                                </Container>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Card.Header className="text-center">
                            <Accordion.Toggle as={Button} varient="link" eventKey="1">
                                Data Specialist - University of Guelph
                            </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="1">
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