import { Col, Container, Row } from "react-bootstrap";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import { ProjectCard } from "./ProjectCard";

export function Projects() {
  const projects = [
    {
      title: "Muvi",
      description: "Movie Streaming app built with React Native",
      imgUrl: projImg1,
    },
    {
      title: "RyaNeza",
      description:
        "Health app that tracks nutrition in your daily meals built with React Native",
      imgUrl: projImg2,
    },
    {
      title: "Reprodoctor",
      description:
        "Online sex therapy app that eliminates the shame of seeking sexual health help built with React Native",
      imgUrl: projImg3,
    },
    {
      title: "Portfolio",
      description: "Website that exposes me to the job market built with React",
      imgUrl: projImg1,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        
      <div class="card-deck">
        <h1>Projects</h1>
        <p>The results of applying my skills to solve real world problems.</p>
        <Row>
          { projects.map((project, index) => {
            return (
                <ProjectCard 
                key={index}
                title={project.title}
                description={project.description}
                image={project.imgUrl} />
            )
          })}
        </Row>
        </div>
      </Container>
    </section>
  );
}
