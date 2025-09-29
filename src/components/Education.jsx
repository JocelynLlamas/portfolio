import { Container, Row, Col, Card } from "react-bootstrap";
import { FaGraduationCap, FaCalendarAlt, FaMapMarkerAlt, FaCode } from "react-icons/fa";
import uaslp from "../assets/img/prom1.png";
import uaslpLogo from "../assets/img/uaslpLogo.png";
import illustration from "../assets/img/Illustration.png";

export const Education = () => {
    const educationData = [
        {
            degree: "Computer Science Engineering",
            school: "Universidad Autónoma de San Luis Potosí",
            faculty: "Facultad de Ingeniería",
            period: "2018 - 2023",
            status: "Completed",
            specialization: "Web Development Speciality",
            achievements: [
                "Focus on modern web technologies",
                "Software engineering fundamentals",
                "Frontend and backend development",
                "Database design and management",
                "Final project: Modern web application development"
            ],
            skills: ["React", "JavaScript", "HTML/CSS", "Node.js", "Python", "Git"],
            gpa: "3.8/4.0"
        }
    ];

    return (
        <section className="education-section" id="education">
            <Container>
                {/* Section Header */}
                <Row className="mb-5">
                    <Col>
                        <div className="section-header">
                            <span className="section-badge">🎓 Education</span>
                            <h2 className="section-title">Academic Journey</h2>
                            <p className="section-subtitle">
                                My completed academic path and continuous learning in computer science
                            </p>
                        </div>
                    </Col>
                </Row>

                <Row className="align-items-center">
                    {/* University Image */}
                    <Col xs={12} lg={5} className="mb-4 mb-lg-0">
                        <div className="university-card">
                            <div className="logo-container">
                                <img
                                    className="university-logo"
                                    src={uaslp}
                                    alt="UASLP Logo"
                                />
                                <div className="logo-glow">
                                    {/* <img
                                        className="university-logo"
                                        src={uaslpLogo}
                                        alt="UASLP Logo"
                                    /> */}
                                </div>
                            </div>
                            <div className="university-info">
                                <h3 className="university-name">UASLP</h3>
                                <p className="university-location">
                                    <FaMapMarkerAlt className="icon" />
                                    San Luis Potosí, México
                                </p>
                            </div>
                        </div>
                    </Col>

                    {/* Education Details */}
                    <Col xs={12} lg={7}>
                        <div className="education-timeline">
                            {educationData.map((edu, index) => (
                                <div key={index} className="timeline-item">
                                    {/* Timeline Line */}
                                    <div className="timeline-line">
                                        <div className="timeline-dot"></div>
                                    </div>

                                    {/* Content */}
                                    <div className="education-card">
                                        {/* Header */}
                                        <div className="edu-header">
                                            <div>
                                                <h3 className="degree">{edu.degree}</h3>
                                                <p className="school">{edu.school}</p>
                                                <p className="faculty">{edu.faculty}</p>
                                            </div>
                                            <div className="status-badge completed">
                                                <FaGraduationCap className="icon" />
                                                {edu.status}
                                            </div>
                                        </div>

                                        {/* Period */}
                                        <div className="edu-period">
                                            <FaCalendarAlt className="icon" />
                                            <span>{edu.period}</span>
                                        </div>

                                        {/* Specialization */}
                                        <div className="specialization">
                                            <FaCode className="icon" />
                                            <span>{edu.specialization}</span>
                                        </div>
                                        
                                        {/* Skills */}
                                        <div className="skills-container">
                                            <h4>Technologies & Skills</h4>
                                            <div className="skills-list">
                                                {edu.skills.map((skill, skillIndex) => (
                                                    <span key={skillIndex} className="skill-tag">
                                                        {skill}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Achievements */}
                                        <div className="achievements">
                                            <h4>Key Accomplishments</h4>
                                            <ul className="achievements-list">
                                                {edu.achievements.map((achievement, achievementIndex) => (
                                                    <li key={achievementIndex}>
                                                        {achievement}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};