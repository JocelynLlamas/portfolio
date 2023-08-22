import { Col, Container, Row, Nav, Tab } from "react-bootstrap"
import { ProjectCard } from "./ProjectCard"
import colorSharp2 from "../assets/img/color-sharp2.png"
import ecomerce from "../assets/img/projects/ecomerce2.png"
import inventory from "../assets/img/projects/inventory.png"
import crud from "../assets/img/projects/crud.png"
import layout from "../assets/img/projects/layout.png"
import academicLayout from "../assets/img/projects/academicLayout.png"
import dashboard from "../assets/img/projects/dashboard.png"
import dpd from "../assets/img/projects/dpd.png"
import weather from "../assets/img/projects/weather.png"

export const Projects = () => {

    const projects = [
        {
            title: "Ecomerce",
            description: "Developed in: PHP, HTML, CSS, and JavaScript",
            repository: "https://github.com/JocelynLlamas/Pagina-Web.git",
            imgUrl: ecomerce,
        },
        {
            title: "Inventory",
            description: "Developed in: Laravel, Blade, HTML, CSS, JavaScript and Bootstrap",
            repository: "https://github.com/JocelynLlamas/Proyecto-Inventario-con-CRUDS.git",
            imgUrl: inventory,
        },
        {
            title: "CRUD",
            description: "Developed in: Angular, TypeScript, HTML and CSS",
            repository: "https://github.com/JocelynLlamas/CRUD-PELICULAS.git",
            imgUrl: crud,
        },
        {
            title: "Web Layout",
            description: "Developed in: HTML and CSS",
            repository: "https://github.com/JocelynLlamas/Maquetacion-Web---No-responsiva.git",
            imgUrl: layout,
        },
        {
            title: "Layout for the Academic Secretariat",
            description: "Developed in: HTML, CSS and Bootstrap",
            repository: "https://github.com/JocelynLlamas/Maqueta-Pagina-Secretaria-Academica-UASLP.git",
            imgUrl: academicLayout,
        },
        {
            title: "Dashboard",
            description: "Developed in: Laravel, Blade, HTML, CSS, JavaScript and Bootstrap",
            repository: "",
            imgUrl: dashboard,
        },
        {
            title: "Project for DPD - Frontend Development",
            description: "Developed in: React, HTML, CSS, JavaScript, AntDesign and DotNET",
            repository: "",
            imgUrl: dpd,
        },
        {
            title: "Weather APP",
            description: "Developed in: React, HTML, CSS, JavaScript, AntDesign and Python",
            repository: "https://github.com/JocelynLlamas/ClimaApp",
            imgUrl: weather,
        },
        {
            title: "Rick and Morty API",
            description: "Developed in: React, HTML, CSS, JavaScript, Bootstrap",
            repository: "https://github.com/JocelynLlamas/APIRickMorty",
            imgUrl: weather,
        },

    ]
    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                        <h2>Projects</h2>
                        {/* MENCIONAR QUE AHI ESTAN LOS LINKS A LOS REPOSITORIOS */}
                        <p>My focus is on combining creative design with efficient coding to deliver exceptional digital experiences. In a variety of projects, I have shown my ability to transform ideas into visual realities, using technologies such as HTML, CSS, and JavaScript. Explore my Github profile to see how I've contributed to projects that have a positive impact on the user experience, reflecting my dedication to high-quality web design.
                        </p>
                        <Tab.Container id="projects-tabs" defaultActiveKey="firts">
                            <Nav fill variant="tabs" defaultActiveKey="/about">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">See my projects</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Row>
                                        {
                                            projects.map((project, index) => {
                                                return (
                                                    <ProjectCard key={index} {...project} />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}