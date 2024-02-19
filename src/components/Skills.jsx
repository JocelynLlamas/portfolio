import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Container, Row, Col } from "react-bootstrap";
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
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>
                                Technical Skills
                            </h2>

                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                <div className="item">
                                    <img src={skillPHP} alt="Image"></img>
                                    <h5>PHP</h5>
                                </div>
                                <div className="item">
                                    <img src={skillJS} alt="Image"></img>
                                    <h5>JavaScript</h5>
                                </div>
                                <div className="item">
                                    <img src={skillTS} alt="Image"></img>
                                    <h5>TypeScript</h5>
                                </div>
                                <div className="item">
                                    <img src={skillHTML} alt="Image"></img>
                                    <h5>HTML</h5>
                                </div>
                                <div className="item">
                                    <img src={skillCSS} alt="Image"></img>
                                    <h5>CSS</h5>
                                </div>
                                <div className="item">
                                    <img src={skillSql} alt="Image"></img>
                                    <h5>SQL</h5>
                                </div>
                                <div className="item">
                                    <img src={skillReact} alt="Image"></img>
                                    <h5>React</h5>
                                </div>
                                <div className="item">
                                    <img src={skillNg} alt="Image"></img>
                                    <h5>Angular</h5>
                                </div>
                                <div className="item">
                                    <img src={skillLaravel} alt="Image"></img>
                                    <h5>Laravel</h5>
                                </div>
                                <div className="item">
                                    <img src={skillNet} alt="Image"></img>
                                    <h5>.NET</h5>
                                </div>
                                <div className="item">
                                    <img src={skillBootstrap} alt="Image"></img>
                                    <h5>Bootstrap</h5>
                                </div>
                                <div className="item">
                                    <img src={skillAntd} alt="Image"></img>
                                    <h5>Ant Design</h5>
                                </div>
                                <div className="item">
                                    <img src={skillTailwind} alt="Image"></img>
                                    <h5>Tailwind</h5>
                                </div>
                                <div className="item">
                                    <img src={skillNgMat} alt="Image"></img>
                                    <h5>Angular Material</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left"></img>
        </section>
    )
};