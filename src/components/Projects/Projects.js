import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="E-Commerce"
              description="Responsive web application showcasing various products to give a seamless user experience. User-friendly navigation and product search."
              ghLink="https://github.com/kshitizshreyansh/E-Commerce"
              demoLink="https://e-commerce-m385.onrender.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Entertainment"
              description="An interactive entertainment app
              providing movie and TV show
              listings with detailed information
              and search functionality."
              ghLink="https://github.com/kshitizshreyansh/EntertainmentApp"
              demoLink="https://entertainmentapp-baef.onrender.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Social Media Application"
              description="A social media app using React.js
              and GraphQL with real-time posts,
              comments, and user interactions."
              ghLink="https://github.com/kshitizshreyansh/React-Client"
              demoLink="https://react-client-a8jt.onrender.com/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Socio GRAM"
              description="A social media app built with React.js and GraphQL, featuring posts, comments, and user interactions."
              ghLink="https://github.com/kshitizshreyansh/Frontend-Social-Media.git"
              demoLink="https://frontend-social-media.onrender.com/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
