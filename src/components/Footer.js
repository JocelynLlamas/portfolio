import { Col, Container, Row } from "react-bootstrap"
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon00.jpg';
import navIcon3 from '../assets/img/email.png';
import { FaRegEnvelope, FaMobile } from 'react-icons/fa';
import logo from '../assets/img/logo.svg';
import { useState } from "react";

export const Footer = () => {

    const [email, setEmail] = useState("llamasjocelyn@outlook.com");
    const [phone, setPhone] = useState("4181189299");
    const [showAlert, setShowAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState("");

    const handleCopy = () => {
        navigator.clipboard.writeText(email);
        setAlertMessage(`"${email}" was copy to clipboard`);
        setShowAlert(true);
        setTimeout(() => setShowAlert(false), 3000);
    };

    const handleCopyPhone = () => {
        navigator.clipboard.writeText(phone);
        setAlertMessage(`"${phone}" was copy to clipboard`);
        setShowAlert(true);
        setTimeout(() => setShowAlert(false), 3000);
    };


    return (
        <footer className="footer">
            <Container >
                <Row className="align-item-center">
                    <Col sm={6}>
                        <img src={logo} alt="Logo" />
                    </Col>
                    <Col sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                            <a href='https://www.linkedin.com/in/mar%C3%ADa-jocelyn-llamas-de-la-torre-08aa36251/'><img src={navIcon1} /></a>
                            <a href='https://github.com/JocelynLlamas'><img src={navIcon2} /></a>
                            <a onClick={handleCopy} className="iconLink">
                                <FaRegEnvelope/>
                            </a>
                            {showAlert && (
                                <div className="alert alert-success alert-dismissible fade show" role="alert">
                                    {alertMessage}
                                    <button
                                        type="button"
                                        className="btn-close"
                                        data-bs-dismiss="alert"
                                        aria-label="Close"
                                        onClick={() => setShowAlert(false)}
                                    ></button>
                                </div>
                            )}
                            <a onClick={handleCopyPhone} className="iconLink">
                                <FaMobile/>
                            </a>
                            {showAlert && (
                                <div className="alert alert-success alert-dismissible fade show" role="alert">
                                    {alertMessage}
                                    <button
                                        type="button"
                                        className="btn-close"
                                        data-bs-dismiss="alert"
                                        aria-label="Close"
                                        onClick={() => setShowAlert(false)}
                                    ></button>
                                </div>
                            )}
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}