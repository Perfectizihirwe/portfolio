import { Col, Container, Row } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImage from "../assets/img/header-img.svg";

export function Banner() {
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline">Welcome to my portfolio</span>
            <h1>{`I'm Perfect Gift IZIHIRWE`}</h1>
            <h1>Mobile Developer</h1>
            <p>
              I'm a mobile and front-end web developer in React Native and
              React. I love exploring new front-end technologies and I'm always
              looking for ways to improve my skills. I'm currently working at
              KLAB as a mobile developer.
            </p>
            <button className="connect" onClick={() => console.log("Connect")}>
              Let's connect
              <ArrowRightCircle size={25} />
            </button>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={headerImage} alt="Header" />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
