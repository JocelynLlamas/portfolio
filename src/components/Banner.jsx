import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/banner/mac.png"
import topImg from "../assets/img/banner/Illustration top.png"

export const Banner = () => {

    const [loop, setLoop] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [time, setTime] = useState(250 - Math.random() * 100);
    const period = 2000;
    const toRotate = ["Web Developer", "Frontend Developer"];

    useEffect(() => {
        let ticket = setInterval(() => {
            tick();
        }, time)

        return () => { clearInterval(ticket) };
    }, [text])

    const tick = () => {
        let i = loop % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) :
            fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setTime(prevTime => prevTime / 2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setTime(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoop(loop + 1);
            setTime(400);
        }
    }


    return (
        <section className="banner" id="about">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <img src={topImg} alt="top Img" className="imgTop" />
                        <span className="tagline">Welcome to my Portfolio</span>
                        <h1>{`Hi I'm Jocelyn Llamas`} <span className="wrap">{text}</span> </h1>
                        <p>Computer Engineering student focused on
                            improving his skills and interested in web
                            development.</p>
                    </Col>
                    <Col xs={12} md={6} xl={5} className="imgBox">
                        <img className="headerImg" src={headerImg} alt="Header Img" />
                    </Col>
                </Row>
            </Container>
        </section>
    );
}