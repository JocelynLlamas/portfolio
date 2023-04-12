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

    ]
    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                        <h2>Projects</h2>
                        {/* MENCIONAR QUE AHI ESTAN LOS LINKS A LOS REPOSITORIOS */}
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eu maximus orci.
                            Vivamus ullamcorper lacus nec commodo volutpat. Aliquam at.
                        </p>
                        <Tab.Container id="projects-tabs" defaultActiveKey="firts">
                            <Nav fill variant="tabs" defaultActiveKey="/home">
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
            {/* <img className="background-image-right" src={colorSharp2}/> */}
        </section>
    )
}