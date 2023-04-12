import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, repository }) => {

    return (
        <Col sm={6} md={4}>
            <div className="proj-imgbx">
                <img src={imgUrl} />
                <div className="proj-txtx">
                    <h4>{title}</h4>
                    <span>{description}</span>
                    <hr/>
                    <div className="linkRepository">
                        <a href={repository}>{repository}</a>
                    </div>
                </div>

            </div>
        </Col>
    );
}
