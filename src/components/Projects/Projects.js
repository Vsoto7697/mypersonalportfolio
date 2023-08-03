import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import taskinator from "../../Assets/Projects/taskinator.png";
import nosqlsocialnetwork from "../../Assets/Projects/nosqlsocialnetwork.png";
import fetchgrooming from "../../Assets/Projects/fetchgrooming.png";
import passwordgenerator from "../../Assets/Projects/passwordgenerator.png";
import weatherapp from "../../Assets/Projects/weatherapp.png";
import gititdone from "../../Assets/Projects/gititdone.png";

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
              imgPath={passwordgenerator}
              isBlog={false}
              title="Password Generator"
              description="This password generator is a software tool that creates randomly generated passwords for users utlizing javscript."
              ghLink="https://github.com/Vsoto7697/vpwgenerator"
              demoLink="https://vsoto7697.github.io/vpwgenerator/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gititdone}
              isBlog={false}
              title="Git It Done"
              description="This project is a web application that searches for open-source projects with open issues and pull requests through the GitHub API."
              ghLink="https://github.com/Vsoto7697/git-it-done"
              demoLink="https://vsoto7697.github.io/git-it-done/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fetchgrooming}
              isBlog={false}
              title="Fetch Grooming"
              description="Welcome to Fetch! A grooming service that will connect you to the best fit groomer for your lovable best friend!"
              ghLink="https://github.com/awinters81/Project-1"
              demoLink="https://awinters81.github.io/Project-1/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={taskinator}
              isBlog={false}
              title="Taskinator"
              description="A task list organizer to make better organize your projects in order from tasks to do, tasks in progress and tasks completed."
              ghLink="https://github.com/Vsoto7697/VsotoTaskinator"
              demoLink="https://vsoto7697.github.io/VsotoTaskinator/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weatherapp}
              isBlog={false}
              title="Server Side API Weather App"
              description="The weather dashboard is a browser-based application with dynamically updated HTML and CSS. To access both current and anticipated weather data, it makes use of Third-Party APIs provided by OpenWeather.com.The app makes requests to a URL with particular parameters through APIs."
              ghLink="https://github.com/Vsoto7697/Server-Side-API-Weather-App"
              demoLink="https://vsoto7697.github.io/Server-Side-API-Weather-App/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={nosqlsocialnetwork}
              isBlog={false}
              title="NOSQL Social Network"
              description="It is an API for a web application for a social network where users can share their thoughts, respond to those of friends, and make a friend list."
              ghLink="https://github.com/Vsoto7697/NOSQLSocialNetwork"
              demoLink="https://www.youtube.com/watch?v=NmuiCTdzXak&feature=youtu.be&themeRefresh=1"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
