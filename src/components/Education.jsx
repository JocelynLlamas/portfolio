import { Container, Row, Col, Card } from "react-bootstrap";
import uaslp from "../assets/img/prom1.png";
import illustration from "../assets/img/Illustration.png";

export const Education = () => {
    return (
        <section className="education" id="education">
            <Container style={{ display: 'flex', justifyContent: 'center' }}>
                <Row className="education-bx">
                    <Col className="d-flex p-4 justify-content-center align-items-center">
                        <img className="promImg" src={uaslp} alt="education" />
                    </Col>
                    <Col className="d-flex justify-content-center align-items-center">
                        <Row style={{ margin: "0 auto" }}>
                            <h1>Education</h1>
                            <p className="career">Computer science engineering</p>
                            <p className="school">Universidad Autónoma de San Luis
                                Potosí, Facultad de Ingeniería
                            </p>
                            <p className="period">
                                2018 - Present
                            </p>
                            <li>
                                Web Development Speciality
                            </li>
                        </Row>
                    </Col>
                </Row>
            </Container>
                <img className="Illustration" src={illustration} alt="education" />
        </section>
    )
};