import { Col, Container, Row } from "react-bootstrap"
import {
    FaRegEnvelope,
    FaMobile,
    FaLinkedin,
    FaGithub,
    FaFileDownload,
    FaArrowUp,
    FaMapMarkerAlt,
    FaHeart
} from 'react-icons/fa';
import { useState, useEffect } from "react";

export const Footer = () => {
    const [email] = useState("llamasjocelyn@outlook.com");
    const [phone] = useState("+52 418 118 9299");
    const [showToast, setShowToast] = useState(false);
    const [toastMessage, setToastMessage] = useState("");
    const [showScrollTop, setShowScrollTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowScrollTop(window.scrollY > 400);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleCopy = (text, type) => {
        navigator.clipboard.writeText(text);
        setToastMessage(`${type} copiado al portapapeles ✔️`);
        setShowToast(true);
        setTimeout(() => setShowToast(false), 3000);
    };

    const downloadCV = () => {
        const link = document.createElement('a');
        link.href = '/assets/CV-JocelynLlamas.pdf';
        link.setAttribute('download', 'CV-JocelynLlamas.pdf');
        document.body.appendChild(link);
        link.click();
        link.remove();
    };

    const currentYear = new Date().getFullYear();

    return (
        <>
            <footer className="footer-section">
                <Container>
                    {/* Main Footer Content */}
                    <Row className="footer-content">
                        {/* Brand & Description */}
                        <Col xs={12} lg={4} className="footer-brand">
                            <div className="brand-info">
                                <h3 className="brand-name">Jocelyn Llamas</h3>
                                <p className="brand-title">Computer Engineer & Web Developer</p>
                                <p className="brand-description">
                                    Passionate about creating amazing digital experiences with modern technologies.
                                </p>
                                <div className="location">
                                    <FaMapMarkerAlt className="location-icon" />
                                    <span>San Luis Potosí, México</span>
                                </div>
                            </div>
                        </Col>

                        {/* Quick Links */}
                        <Col xs={12} md={6} lg={4} className="footer-links">
                            <h4 className="links-title">Quick Links</h4>
                            <div className="links-grid">
                                <a href="#about" className="footer-link">About</a>
                                <a href="#experience" className="footer-link">Experience</a>
                                <a href="#skills" className="footer-link">Skills</a>
                                <a href="#projects" className="footer-link">Projects</a>
                                <a href="#education" className="footer-link">Education</a>
                            </div>
                        </Col>

                        {/* Contact & Social */}
                        <Col xs={12} md={6} lg={4} className="footer-contact">
                            <h4 className="contact-title">Get In Touch</h4>

                            {/* Contact Info */}
                            <div className="contact-info">
                                <div
                                    className="contact-item"
                                    onClick={() => handleCopy(email, "Email")}
                                >
                                    <div className="contact-icon">
                                        <FaRegEnvelope />
                                    </div>
                                    <div className="contact-details">
                                        <span className="contact-label">Email</span>
                                        <span className="contact-value">{email}</span>
                                    </div>
                                </div>

                                <div
                                    className="contact-item"
                                    onClick={() => handleCopy(phone, "Teléfono")}
                                >
                                    <div className="contact-icon">
                                        <FaMobile />
                                    </div>
                                    <div className="contact-details">
                                        <span className="contact-label">Phone</span>
                                        <span className="contact-value">{phone}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Social Links */}
                            <div className="social-links">
                                <a
                                    href='https://www.linkedin.com/in/mar%C3%ADa-jocelyn-llamas-de-la-torre-08aa36251/'
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="social-link linkedin"
                                    title="LinkedIn"
                                >
                                    <FaLinkedin />
                                </a>
                                <a
                                    href='https://github.com/JocelynLlamas'
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="social-link github"
                                    title="GitHub"
                                >
                                    <FaGithub />
                                </a>
                            </div>

                            {/* Download CV */}
                            <button
                                className="download-cv-btn"
                                onClick={downloadCV}
                            >
                                <FaFileDownload className="btn-icon" />
                                Download CV
                            </button>
                        </Col>
                    </Row>

                    {/* Footer Bottom */}
                    <Row className="footer-bottom">
                        <Col>
                            <div className="footer-divider"></div>
                            <div className="bottom-content">
                                <div className="copyright">
                                    <p>
                                        © {currentYear} Jocelyn Llamas. Made with <FaHeart className="heart-icon" /> using React
                                    </p>
                                </div>
                                <div className="footer-actions">
                                    <button
                                        className={`scroll-top-btn ${showScrollTop ? 'visible' : ''}`}
                                        onClick={scrollToTop}
                                        title="Back to top"
                                    >
                                        <FaArrowUp />
                                    </button>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </footer>

            {/* Toast Notification */}
            {showToast && (
                <div className="footer-toast">
                    <div className="toast-content">
                        <div className="toast-message">{toastMessage}</div>
                    </div>
                </div>
            )}
        </>
    );
};