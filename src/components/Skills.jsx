import { useState } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import {
    FaCode,
    FaPalette,
    FaDatabase,
    FaTools,
    FaStar,
    FaRocket,
    FaLightbulb
} from 'react-icons/fa';
import skillAntd from "../assets/img/skills/ant.png";
import skillBootstrap from "../assets/img/skills/bootstrap.png";
import skillCSS from "../assets/img/skills/CSS.png";
import skillHTML from "../assets/img/skills/HTML.svg";
import skillJS from "../assets/img/skills/JS.png";
import skillLaravel from "../assets/img/skills/laravel.png";
import skillNet from "../assets/img/skills/net.png";
import skillNg from "../assets/img/skills/ng.png";
import skillNgMat from "../assets/img/skills/ngMat.png";
import skillPHP from "../assets/img/skills/php.png";
import skillReact from "../assets/img/skills/react.png";
import skillSql from "../assets/img/skills/SQL.png";
import skillTailwind from "../assets/img/skills/tailwind.png";
import skillTS from "../assets/img/skills/TS.png";
import skillFigma from "../assets/img/skills/TS.png"; // Añade este archivo
import skillGit from "../assets/img/skills/TS.png"; // Añade este archivo
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
    const [activeCategory, setActiveCategory] = useState('all');

    const skillCategories = {
        languages: {
            title: "Programming Languages",
            icon: <FaCode />,
            skills: [
                { name: "PHP", level: 85, logo: skillPHP, years: "3+ years", projects: "Laravel projects" },
                { name: "JavaScript", level: 90, logo: skillJS, years: "3+ years", projects: "Multiple frameworks" },
                { name: "TypeScript", level: 85, logo: skillTS, years: "2+ years", projects: "Angular & React" },
                { name: "HTML", level: 95, logo: skillHTML, years: "4+ years", projects: "All web projects" },
                { name: "CSS", level: 90, logo: skillCSS, years: "4+ years", projects: "Responsive designs" },
                { name: "SQL", level: 80, logo: skillSql, years: "3+ years", projects: "Database management" },
                { name: "C#", level: 75, logo: skillNet, years: "2+ years", projects: ".NET development" }
            ]
        },
        frameworks: {
            title: "Frameworks & Libraries",
            icon: <FaRocket />,
            skills: [
                { name: "React", level: 85, logo: skillReact, years: "2+ years", projects: "Multiple projects" },
                { name: "Angular", level: 90, logo: skillNg, years: "2+ years", projects: "BMW, Oxxo Gas" },
                { name: "Laravel", level: 80, logo: skillLaravel, years: "2+ years", projects: "Fullstack apps" },
                { name: ".NET", level: 75, logo: skillNet, years: "1+ year", projects: "Backend development" }
            ]
        },
        frontend: {
            title: "UI/UX & Styling",
            icon: <FaPalette />,
            skills: [
                { name: "Bootstrap", level: 90, logo: skillBootstrap, years: "3+ years", projects: "Responsive layouts" },
                { name: "Tailwind CSS", level: 85, logo: skillTailwind, years: "2+ years", projects: "Modern designs" },
                { name: "Angular Material", level: 80, logo: skillNgMat, years: "2+ years", projects: "BMW dashboards" },
                { name: "Ant Design", level: 75, logo: skillAntd, years: "1+ year", projects: "Enterprise UI" },
                { name: "Figma", level: 70, logo: skillFigma, years: "1+ year", projects: "UI prototyping" }
            ]
        },
        tools: {
            title: "Tools & Methodologies",
            icon: <FaTools />,
            skills: [
                { name: "Git", level: 85, logo: skillGit, years: "3+ years", projects: "Version control" },
                { name: "Agile Scrum", level: 80, logo: null, years: "2+ years", projects: "Team collaboration" },
                { name: "REST APIs", level: 85, logo: null, years: "2+ years", projects: "Backend integration" }
            ]
        }
    };

    const allSkills = Object.values(skillCategories).flatMap(category => category.skills);
    const displayedSkills = activeCategory === 'all' ? allSkills : skillCategories[activeCategory]?.skills || [];

    const getProficiencyText = (level) => {
        if (level >= 90) return "Expert";
        if (level >= 80) return "Advanced";
        if (level >= 70) return "Intermediate";
        return "Beginner";
    };

    const getProficiencyColor = (level) => {
        if (level >= 90) return "from-green-500 to-emerald-600";
        if (level >= 80) return "from-blue-500 to-cyan-600";
        if (level >= 70) return "from-yellow-500 to-amber-600";
        return "from-gray-400 to-gray-500";
    };

    return (
        <section className="skills-section" id="skills">
            <Container>
                {/* Section Header */}
                <Row className="mb-5">
                    <Col>
                        <div className="section-header">
                            <span className="section-badge">💻 Technical Skills</span>
                            <h2 className="section-title">Technologies & Expertise</h2>
                            <p className="section-subtitle">
                                My technical stack and proficiency levels across different technologies
                            </p>
                        </div>
                    </Col>
                </Row>

                {/* Skills Categories Navigation */}
                <Row className="mb-4">
                    <Col>
                        <div className="categories-navigation">
                            <button
                                className={`category-btn ${activeCategory === 'all' ? 'active' : ''}`}
                                onClick={() => setActiveCategory('all')}
                            >
                                <FaLightbulb className="icon" />
                                All Skills
                            </button>
                            {Object.entries(skillCategories).map(([key, category]) => (
                                <button
                                    key={key}
                                    className={`category-btn ${activeCategory === key ? 'active' : ''}`}
                                    onClick={() => setActiveCategory(key)}
                                >
                                    {category.icon}
                                    {category.title}
                                </button>
                            ))}
                        </div>
                    </Col>
                </Row>

                {/* Skills Grid */}
                <Row>
                    <Col>
                        <div className="skills-grid">
                            {displayedSkills.map((skill, index) => (
                                <div key={index} className="skill-card">
                                    <div className="skill-header">
                                        <div className="skill-logo">
                                            {skill.logo ? (
                                                <img src={skill.logo} alt={skill.name} />
                                            ) : (
                                                <div className="skill-icon-placeholder">
                                                    {skill.name.charAt(0)}
                                                </div>
                                            )}
                                        </div>
                                        <div className="skill-info">
                                            <h4 className="skill-name">{skill.name}</h4>
                                            <div className="skill-meta">
                                                <span className="skill-years">{skill.years}</span>
                                                <span className="skill-projects">{skill.projects}</span>
                                            </div>
                                        </div>
                                        <div className="skill-badge">
                                            <span className={`proficiency-level ${getProficiencyText(skill.level).toLowerCase()}`}>
                                                {getProficiencyText(skill.level)}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Progress Bar */}
                                    <div className="progress-container">
                                        <div className="progress-labels">
                                            <span>Proficiency</span>
                                            <span>{skill.level}%</span>
                                        </div>
                                        <div className="progress-bar">
                                            <div
                                                className={`progress-fill ${getProficiencyColor(skill.level)}`}
                                                style={{ width: `${skill.level}%` }}
                                            ></div>
                                        </div>
                                    </div>

                                    {/* Skill Description */}
                                    <div className="skill-description">
                                        <div className="skill-stats">
                                            <div className="stat">
                                                <FaStar className="stat-icon" />
                                                <span>{getProficiencyText(skill.level)} Level</span>
                                            </div>
                                            <div className="stat">
                                                <FaRocket className="stat-icon" />
                                                <span>{skill.years}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Col>
                </Row>

                {/* Technical Highlights */}
                <Row className="mt-5">
                    <Col>
                        <div className="technical-highlights">
                            <h3 className="highlights-title">Technical Highlights</h3>
                            <div className="highlights-grid">
                                <div className="highlight-card">
                                    <div className="highlight-icon frontend">
                                        <FaPalette />
                                    </div>
                                    <h4>Frontend Specialist</h4>
                                    <p>Expert in Angular and React with focus on creating responsive, user-friendly interfaces</p>
                                </div>
                                <div className="highlight-card">
                                    <div className="highlight-icon fullstack">
                                        <FaCode />
                                    </div>
                                    <h4>Fullstack Experience</h4>
                                    <p>Proficient in both frontend and backend development with .NET and Laravel</p>
                                </div>
                                <div className="highlight-card">
                                    <div className="highlight-icon agile">
                                        <FaRocket />
                                    </div>
                                    <h4>Agile Practitioner</h4>
                                    <p>Experienced in Agile methodologies with proven track record in team collaboration</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};