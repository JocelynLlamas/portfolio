import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { 
    FaCode, 
    FaLaptopCode, 
    FaUsers, 
    FaCalendarAlt,
    FaMapMarkerAlt,
    FaArrowLeft,
    FaArrowRight,
    FaReact,
    FaAngular,
    FaMicrosoft,
    FaGraduationCap,
    FaDatabase,
    FaChartLine,
    FaRocket
} from 'react-icons/fa';
import { SiLaravel, SiVuedotjs, SiFigma, SiBootstrap } from 'react-icons/si';

export const Experience = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const experiences = [
        {
            id: 1,
            title: "Front End Developer – Quality IT",
            company: "BMW Group",
            period: "July 2024 - Present",
            duration: "Current",
            location: "Remote",
            type: "Full-time",
            logo: "/assets/img/experience/bmw-logo.png",
            description: "Developing dashboard applications for internal quality management systems at BMW Group, focusing on real-time data analytics and user experience.",
            achievements: [
                "Developed a dashboard application using Angular for internal quality management systems",
                "Led the integration of real-time data analytics into the dashboard to enhance decision-making processes",
                "Collaborated closely with cross-functional teams in sprint planning, daily stand-ups, and retrospectives",
                "Implemented responsive designs and optimized application performance",
                "Worked on maintaining and improving existing front-end codebase"
            ],
            technologies: [
                { name: "Angular", icon: <FaAngular />, color: "#DD0031" },
                { name: "TypeScript", color: "#3178C6" },
                { name: "JavaScript", color: "#F7DF1E" },
                { name: "HTML/CSS", color: "#E34F26" },
                { name: "Agile Scrum", icon: <FaRocket />, color: "#009ECC" },
                { name: "Figma", icon: <SiFigma />, color: "#F24E1E" }
            ],
            category: "Frontend Development"
        },
        {
            id: 2,
            title: "Full Stack Developer",
            company: "Grupo Ti Mexico",
            period: "November 2023 - June 2024",
            duration: "8 months",
            location: "Remote", 
            type: "Full-time",
            logo: "/assets/img/experience/grupo-ti-logo.png",
            description: "Developed and maintained web applications for Oxxo Gas using modern full-stack technologies in an Agile environment.",
            achievements: [
                "Developed and maintained web application for Oxxo Gas using Angular and .NET",
                "Participated in Agile ceremonies, including daily scrum meetings, sprint planning, and retrospectives",
                "Implemented responsive user interfaces and optimized application performance",
                "Collaborated with backend team for API integration and database design",
                "Contributed to code reviews and maintained coding standards"
            ],
            technologies: [
                { name: "Angular", icon: <FaAngular />, color: "#DD0031" },
                { name: ".NET", icon: <FaMicrosoft />, color: "#512BD4" },
                { name: "C#", color: "#239120" },
                { name: "TypeScript", color: "#3178C6" },
                { name: "SQL", icon: <FaDatabase />, color: "#4479A1" },
                { name: "Agile", icon: <FaRocket />, color: "#009ECC" }
            ],
            category: "Full Stack Development"
        },
        {
            id: 3,
            title: "Intern Jr. Web Developer",
            company: "Grupo Transforma",
            period: "December 2022 - June 2023",
            duration: "7 months",
            location: "Remote",
            type: "Internship",
            logo: "/assets/img/experience/grupo-transforma-logo.png",
            description: "Started professional career as full-stack developer, working with React, Angular and .NET in Agile development environment.",
            achievements: [
                "Contributed to front-end development projects in React and Angular",
                "Supported back-end development in .NET and collaborated in Agile processes",
                "Participated in daily scrum meetings, sprint planning sessions and retrospective meetings",
                "Gained experience in enterprise-level web application development",
                "Learned and applied software development best practices"
            ],
            technologies: [
                { name: "React", icon: <FaReact />, color: "#61DAFB" },
                { name: "Angular", icon: <FaAngular />, color: "#DD0031" },
                { name: ".NET", icon: <FaMicrosoft />, color: "#512BD4" },
                { name: "JavaScript", color: "#F7DF1E" },
                { name: "C#", color: "#239120" },
                { name: "Agile", icon: <FaRocket />, color: "#009ECC" }
            ],
            category: "Web Development"
        }
    ];

    const nextExperience = () => {
        setActiveIndex((prev) => (prev + 1) % experiences.length);
    };

    const prevExperience = () => {
        setActiveIndex((prev) => (prev - 1 + experiences.length) % experiences.length);
    };

    const goToExperience = (index) => {
        setActiveIndex(index);
    };

    const currentExperience = experiences[activeIndex];

    return (
        <section className="experience-section" id="experience">
            <Container>
                {/* Section Header */}
                <Row className="mb-5">
                    <Col>
                        <div className="section-header">
                            <span className="section-badge">💼 Professional Experience</span>
                            <h2 className="section-title">Work Experience</h2>
                            <p className="section-subtitle">
                                My professional journey in web development, from intern to frontend developer at leading companies
                            </p>
                        </div>
                    </Col>
                </Row>

                {/* Experience Navigation */}
                <Row className="mb-4">
                    <Col>
                        <div className="experience-navigation">
                            {experiences.map((exp, index) => (
                                <button
                                    key={exp.id}
                                    className={`nav-item ${index === activeIndex ? 'active' : ''}`}
                                    onClick={() => goToExperience(index)}
                                >
                                    <span className="company-name">{exp.company}</span>
                                    <span className="nav-period">{exp.period}</span>
                                    <span className="nav-role">{exp.title.split('–')[0].trim()}</span>
                                </button>
                            ))}
                        </div>
                    </Col>
                </Row>

                {/* Main Experience Content */}
                <Row className="align-items-stretch">
                    <Col xs={12} lg={8}>
                        <div className="experience-card">
                            {/* Card Header */}
                            <div className="exp-header">
                                <div className="company-info">
                                    <div className="logo-container">
                                        <div className="logo-placeholder">
                                            {currentExperience.company.charAt(0)}
                                        </div>
                                    </div>
                                    <div className="title-container">
                                        <h3 className="job-title">{currentExperience.title}</h3>
                                        <p className="company-name-large">{currentExperience.company}</p>
                                        <div className="job-meta">
                                            <span className="meta-item">
                                                <FaCalendarAlt className="icon" />
                                                {currentExperience.period}
                                            </span>
                                            <span className="meta-item">
                                                <FaMapMarkerAlt className="icon" />
                                                {currentExperience.location}
                                            </span>
                                            <span className={`meta-item type-badge ${currentExperience.type.toLowerCase().replace('-', '')}`}>
                                                {currentExperience.type}
                                            </span>
                                            {currentExperience.duration === "Current" && (
                                                <span className="meta-item current-badge">
                                                    🔥 Current Position
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Description */}
                            <div className="exp-description">
                                <p>{currentExperience.description}</p>
                            </div>

                            {/* Achievements */}
                            <div className="exp-achievements">
                                <h4>
                                    <FaLaptopCode className="icon" />
                                    Key Responsibilities & Achievements
                                </h4>
                                <ul className="achievements-list">
                                    {currentExperience.achievements.map((achievement, index) => (
                                        <li key={index}>
                                            <div className="achievement-bullet"></div>
                                            {achievement}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Technologies */}
                            <div className="exp-technologies">
                                <h4>
                                    <FaCode className="icon" />
                                    Technologies & Tools
                                </h4>
                                <div className="tech-tags">
                                    {currentExperience.technologies.map((tech, index) => (
                                        <span 
                                            key={index} 
                                            className="tech-tag"
                                            style={{ '--tech-color': tech.color }}
                                        >
                                            {tech.icon && <span className="tech-icon">{tech.icon}</span>}
                                            {tech.name}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </Col>

                    {/* Side Info Panel */}
                    <Col xs={12} lg={4}>
                        <div className="info-panel">
                            {/* Duration */}
                            <div className="info-card">
                                <div className="info-icon">
                                    <FaCalendarAlt />
                                </div>
                                <div className="info-content">
                                    <span className="info-label">Duration</span>
                                    <span className="info-value">{currentExperience.duration}</span>
                                </div>
                            </div>

                            {/* Category */}
                            <div className="info-card">
                                <div className="info-icon">
                                    <FaGraduationCap />
                                </div>
                                <div className="info-content">
                                    <span className="info-label">Focus Area</span>
                                    <span className="info-value">{currentExperience.category}</span>
                                </div>
                            </div>

                            {/* Employment Type */}
                            <div className="info-card">
                                <div className="info-icon">
                                    <FaUsers />
                                </div>
                                <div className="info-content">
                                    <span className="info-label">Employment Type</span>
                                    <span className="info-value">{currentExperience.type}</span>
                                </div>
                            </div>

                            {/* Progress Indicator */}
                            <div className="progress-indicator">
                                <span className="progress-text">
                                    {activeIndex + 1} of {experiences.length}
                                </span>
                                <div className="progress-bar">
                                    <div 
                                        className="progress-fill"
                                        style={{ width: `${((activeIndex + 1) / experiences.length) * 100}%` }}
                                    ></div>
                                </div>
                            </div>

                            {/* Navigation Buttons */}
                            <div className="navigation-buttons">
                                <button 
                                    className="nav-btn prev-btn"
                                    onClick={prevExperience}
                                    disabled={activeIndex === 0}
                                >
                                    <FaArrowLeft />
                                    Previous
                                </button>
                                <button 
                                    className="nav-btn next-btn"
                                    onClick={nextExperience}
                                    disabled={activeIndex === experiences.length - 1}
                                >
                                    Next
                                    <FaArrowRight />
                                </button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};