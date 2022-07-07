import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Container, Col, Row } from "react-bootstrap";
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";

export function Skills() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skills-box">
              <h2>Skills</h2>
              <p className="skillsdescription">
                The right skills can open doors and they can make an impact.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="skills-slider"
              >
                <div className="item">
                  <img src={meter1} alt="Project" />
                  <h3>React Native</h3>
                </div>
                <div className="item">
                  <img src={meter2} alt="Project" />
                  <h3>React</h3>
                </div>
                <div className="item">
                  <img src={meter3} alt="Project" />
                  <h3>Git & Github</h3>
                </div>
                <div className="item">
                  <img src={meter1} alt="Project" />
                  <h3>Firebase</h3>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
