import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/about.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
            I fell in love with programming, and ever since then, I've been on an exciting learning journey. 🚀
              <br />
              <br />I am well-versed in classic programming languages like
              <i>
                <b className="purple"> Javascript, Java and Python. </b>
              </i>
              <br />
              <br />
              My primary field of interest lies in building new &nbsp;
              <i>
                <b className="purple">Web Technologies and Products </b> , and I'm particularly passionate about coding for{" "}
                <b className="purple">
                gaming applications</b>.
              </i>
              <br />
              <br />
              My true passion lies in developing products using&nbsp;
              <i>
                <b className="purple">React.js</b>
              </i>
              &nbsp;and modern JavaScript libraries and frameworks. I find joy in crafting interactive and dynamic web applications that deliver exceptional user experiences.
              <br />
              <br />
              Whether it's building innovative web technologies or creating captivating gaming applications, I thrive on utilizing my skills with <b className="purple">Node.js</b> and <b className="purple">React.js</b> to bring ideas to life.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/vsoto7697"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/Wrestletechdev"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/victor-soto-483066120/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
