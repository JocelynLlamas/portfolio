import { Carousel, Container, Row, Col } from 'react-bootstrap';
import secretaria from "../assets/img/banner/mac.png";

export const Experience = () => {
    return (
        <section className='experience' id='experience'>
            <Carousel>
                <Carousel.Item>
                    <Container style={{ justifyContent: 'center', display: 'flex' }}>
                        <Row className="experience-bx">
                            <h1>Experience</h1>
                            <Col className="d-flex p-4 justify-content-center align-items-center">
                                <img src={secretaria} alt="education" />
                            </Col>
                            <Col className="d-flex justify-content-center align-items-center">
                                <Row style={{ margin: "0 auto" }}>
                                    <h1>Intern</h1>
                                    {/* <p className="career">Intern</p> */}
                                    <p className="school">Coordinación de Tecnología Educativa de la Secretaría Académica</p>
                                    <p className="period">
                                        January 2022 - July 2022
                                    </p>
                                    <ul>
                                        <li>Web Development</li>
                                        <li>Creation of digital educational materials</li>
                                        <li>Creation of virtual spaces on the Didac-TIC platform</li>
                                    </ul>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                </Carousel.Item>
                <Carousel.Item>
                    <Container style={{ justifyContent: 'center', display: 'flex' }}>
                        <Row className="experience-bx">
                            <h1>Experience</h1>
                            <Col className="d-flex p-4 justify-content-center align-items-center">
                                <img src={secretaria} alt="education" />
                            </Col>
                            <Col className="d-flex justify-content-center align-items-center">
                                <Row style={{ margin: "0 auto" }}>
                                    <h1>Intern Jr. Web Developer</h1>
                                    {/* <p className="career">Intern</p> */}
                                    <p className="school">Grupo Transforma</p>
                                    <p className="period">
                                        November 2022 - June 2023
                                    </p>
                                    <ul>
                                        <li>Front-end development in React.</li>
                                        <li>Front-end development in Angular.</li>
                                        <li>Back-end development in .NET.</li>
                                        <li>Participation in daily scrum meetings, sprint planning sessions and retrospective meetings. </li>
                                    </ul>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                </Carousel.Item>
            </Carousel>
        </section>
    )
}