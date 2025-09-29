import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/banner/mac.png";
import topImg from "../assets/img/banner/Illustration top.png";

export const Banner = () => {
    const [loop, setLoop] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [time, setTime] = useState(250 - Math.random() * 100);
    const period = 2000;
    const toRotate = ["Web Developer", "Frontend Developer", "React Developer"];

    useEffect(() => {
        let ticket = setInterval(() => {
            tick();
        }, time);

        return () => { clearInterval(ticket); };
    }, [text]);

    const tick = () => {
        let i = loop % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting
            ? fullText.substring(0, text.length - 1)
            : fullText.substring(0, text.length + 1);

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
    };

    return (
        <section className="banner-section" id="about">
            <Container>
                <Row className="align-items-center min-h-screen py-20">
                    {/* Text Content */}
                    <Col xs={12} md={6} xl={7} className="relative z-10">
                        <div className="banner-content">
                            {/* Welcome Badge */}
                            <div className="welcome-badge">
                                <span className="badge-text">✨ Welcome to my Portfolio</span>
                            </div>

                            {/* Main Heading */}
                            <h1 className="main-heading">
                                Hi, I'm <span className="name-gradient">Jocelyn Llamas</span>
                                <br />
                                <span className="typing-text">
                                    <span className="typed-text">{text}</span>
                                    <span className="cursor">|</span>
                                </span>
                            </h1>

                            {/* Description */}
                            <p className="description">
                                Passionate Computer Engineering student focused on creating
                                <span className="highlight-text"> amazing digital experiences</span>.
                                Specialized in modern web development with React, JavaScript,
                                and cutting-edge technologies.
                            </p>

                            {/* CTA Buttons */}
                            <div className="cta-buttons">
                                <button className="btn-primary">
                                    View My Work
                                </button>
                                <button className="btn-secondary">
                                    Let's Connect
                                </button>
                            </div>

                            {/* Quick Stats */}
                            <div className="quick-stats">
                                <div className="stat">
                                    <span className="stat-number">2+</span>
                                    <span className="stat-label">Years Learning</span>
                                </div>
                                <div className="stat">
                                    <span className="stat-number">10+</span>
                                    <span className="stat-label">Projects</span>
                                </div>
                                <div className="stat">
                                    <span className="stat-number">5+</span>
                                    <span className="stat-label">Technologies</span>
                                </div>
                            </div>
                        </div>
                    </Col>

                    {/* Image Content */}
                    <Col xs={12} md={6} xl={5} className="relative">
                        <div className="image-container">
                            <div className="floating-shapes">
                                <div className="shape shape-1"></div>
                                <div className="shape shape-2"></div>
                                <div className="shape shape-3"></div>
                            </div>
                            <img
                                className="hero-image"
                                src={headerImg}
                                alt="Laptop illustration"
                            />
                            {/* Floating Elements */}
                            <div className="floating-element code-badge">
                                <span>{"</>"}</span>
                            </div>
                            <div className="floating-element react-badge">
                                <span>⚛️</span>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}