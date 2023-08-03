import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Victor Soto </span>
            from <span className="purple"> Queens, New York.</span>
            <br /> I am a software engineer with a passion for creating innovative programs that enhance organizational efficiency and effectiveness.
            <br />
            Currently, I work as a Software Engineer at Brother’s Wireless in Brooklyn, NY.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Modding Video Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Sport Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling
            </li>
          </ul>

          <p style={{ color: "rgb(100, 149, 237)" }}>
            "I think if you do something and it turns out pretty good, then you should go do something else wonderful, not dwell on it for too long. Just figure out what’s next."{" "}
          </p>
          <footer className="blockquote-footer">Steve Jobs</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
