import { Col } from "react-bootstrap";

export function ProjectCard(props) {
    const { title, description, image } = props;

    return(
        <Col>
        <div class="card">
              <img class="card-img-top" src={image} alt="Card" />
              <div class="card-body">
                <h5 class="card-title">{title}</h5>
                <p class="card-text">{description}</p>
              </div>
            </div>
        
        </Col>
    )
}