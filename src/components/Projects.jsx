import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap"
import { ProjectCard } from "./ProjectCard"
import {
    FaGithub,
    FaExternalLinkAlt,
    FaCode,
    FaPalette,
    FaMobile,
    FaDatabase,
    FaFilter,
    FaStar,
    FaReact,
    FaAngular,
    FaLaravel
} from "react-icons/fa";
import colorSharp2 from "../assets/img/color-sharp2.png"
import ecomerce from "../assets/img/projects/ecomerce2.png"
import inventory from "../assets/img/projects/inventory.png"
import crud from "../assets/img/projects/crud.png"
import dashboard from "../assets/img/projects/dashboard.png"
import dpd from "../assets/img/projects/dpd.png"
import weather from "../assets/img/projects/weather.png"

export const Projects = () => {
    const [activeFilter, setActiveFilter] = useState('all');

    const projects = [
        {
            title: "BMW Quality Dashboard",
            description: "Enterprise dashboard application for internal quality management systems at BMW Group",
            longDescription: "Developed a comprehensive dashboard using Angular for BMW's internal quality management. Features real-time data analytics, responsive design, and integration with backend services.",
            technologies: ["Angular", "TypeScript", "HTML/CSS", "Agile Scrum"],
            category: "enterprise",
            repository: "",
            demoUrl: "",
            imgUrl: dashboard,
            featured: true,
            status: "Professional Project",
            highlights: ["Real-time analytics", "Enterprise scale", "Cross-functional collaboration"]
        },
        {
            title: "Oxxo Gas Web Application",
            description: "Full-stack web application for Oxxo Gas operations management",
            longDescription: "Contributed to the development and maintenance of a web application for Oxxo Gas using Angular and .NET. Implemented responsive interfaces and participated in Agile development processes.",
            technologies: ["Angular", ".NET", "C#", "SQL", "TypeScript"],
            category: "enterprise",
            repository: "",
            demoUrl: "",
            imgUrl: dpd,
            featured: true,
            status: "Professional Project",
            highlights: ["Full-stack development", "Agile methodology", "Database integration"]
        },
        {
            title: "Inventory Management System",
            description: "Complete inventory management solution with CRUD operations",
            longDescription: "Built a full-featured inventory management system using Laravel with comprehensive CRUD operations, user authentication, and responsive design using Bootstrap.",
            technologies: ["Laravel", "PHP", "Bootstrap", "JavaScript", "MySQL"],
            category: "fullstack",
            repository: "https://github.com/JocelynLlamas/Proyecto-Inventario-con-CRUDS.git",
            demoUrl: "",
            imgUrl: inventory,
            featured: true,
            status: "Personal Project",
            highlights: ["CRUD operations", "User authentication", "Responsive design"]
        },
        {
            title: "E-commerce Platform",
            description: "Full e-commerce solution with product management and shopping cart",
            longDescription: "Developed a complete e-commerce platform from scratch using PHP and vanilla JavaScript. Features include product catalog, shopping cart, and user management system.",
            technologies: ["PHP", "JavaScript", "HTML", "CSS", "MySQL"],
            category: "fullstack",
            repository: "https://github.com/JocelynLlamas/Pagina-Web.git",
            demoUrl: "",
            imgUrl: ecomerce,
            featured: false,
            status: "Academic Project",
            highlights: ["Product management", "Shopping cart", "User system"]
        },
        {
            title: "Weather Application",
            description: "Real-time weather application with modern UI/UX",
            longDescription: "Created a weather application using React and Python backend. Features real-time weather data, location-based services, and responsive design with Ant Design components.",
            technologies: ["React", "Python", "Ant Design", "JavaScript", "API Integration"],
            category: "frontend",
            repository: "https://github.com/JocelynLlamas/ClimaApp",
            demoUrl: "",
            imgUrl: weather,
            featured: false,
            status: "Personal Project",
            highlights: ["Real-time data", "API integration", "Modern UI/UX"]
        },
        {
            title: "Movie CRUD Application",
            description: "Angular application for movie database management",
            longDescription: "Developed a CRUD application using Angular for managing a movie database. Includes create, read, update, and delete operations with a clean user interface.",
            technologies: ["Angular", "TypeScript", "HTML", "CSS"],
            category: "frontend",
            repository: "https://github.com/JocelynLlamas/CRUD-PELICULAS.git",
            demoUrl: "",
            imgUrl: crud,
            featured: false,
            status: "Academic Project",
            highlights: ["CRUD operations", "Angular framework", "TypeScript"]
        }
    ];

    const filteredProjects = activeFilter === 'all'
        ? projects
        : projects.filter(project => project.category === activeFilter);

    const featuredProjects = projects.filter(project => project.featured);

    return (
        <section className="projects-section" id="projects">
            <Container>
                {/* Section Header */}
                <Row className="mb-5">
                    <Col>
                        <div className="section-header">
                            <span className="section-badge">🚀 Projects</span>
                            <h2 className="section-title">My Portfolio</h2>
                            <p className="section-subtitle">
                                A collection of projects showcasing my skills in web development, from enterprise applications to personal learning projects
                            </p>
                        </div>
                    </Col>
                </Row>

                {/* Featured Projects */}
                <Row className="mb-5">
                    <Col>
                        <div className="featured-projects">
                            <h3 className="featured-title">
                                <FaStar className="icon" />
                                Featured Projects
                            </h3>
                            <Row>
                                {featuredProjects.map((project, index) => (
                                    <Col key={index} xs={12} lg={6} className="mb-4">
                                        <div className="featured-project-card">
                                            <div className="project-image">
                                                <img src={project.imgUrl} alt={project.title} />
                                                <div className="project-overlay">
                                                    <div className="project-links">
                                                        {project.repository && (
                                                            <a href={project.repository} target="_blank" rel="noopener noreferrer" className="project-link">
                                                                <FaGithub />
                                                                Code
                                                            </a>
                                                        )}
                                                        {project.demoUrl && (
                                                            <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="project-link">
                                                                <FaExternalLinkAlt />
                                                                Demo
                                                            </a>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="project-content">
                                                <div className="project-status">
                                                    {project.status}
                                                </div>
                                                <h4 className="project-title">{project.title}</h4>
                                                <p className="project-description">{project.description}</p>
                                                <div className="project-technologies">
                                                    {project.technologies.map((tech, techIndex) => (
                                                        <span key={techIndex} className="tech-tag">
                                                            {tech}
                                                        </span>
                                                    ))}
                                                </div>
                                                <div className="project-highlights">
                                                    {project.highlights.map((highlight, highlightIndex) => (
                                                        <span key={highlightIndex} className="highlight">
                                                            {highlight}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                ))}
                            </Row>
                        </div>
                    </Col>
                </Row>
                
                {/* Call to Action */}
                <Row className="mt-5">
                    <Col className="text-center">
                        <div className="projects-cta">
                            <h3>Want to see more?</h3>
                            <p>Check out my GitHub profile for more projects and code examples</p>
                            <a
                                href="https://github.com/JocelynLlamas"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="cta-button"
                            >
                                <FaGithub />
                                Visit My GitHub
                            </a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}