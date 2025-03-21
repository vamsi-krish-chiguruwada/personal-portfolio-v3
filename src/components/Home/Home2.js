import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
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
              Hello! 👋 I’m <b className="purple">Vamsi Krish</b>, a UI expert
              and frontend engineer with a proven track record in building
              scalable, high-performance web applications. With over{" "}
              <b className="purple">three years of experience</b>, I specialize
              in <b className="purple">React.js</b>,{" "}
              <b className="purple">Redux</b>,{" "}
              <b className="purple">TypeScript</b>, and modern front-end
              architectures to create seamless, engaging user experiences.{" "}
              <br />
              <br />
              At <b className="purple">Yash Technologies</b>, I played a pivotal
              role in developing enterprise-grade applications for{" "}
              <b className="purple">Merck Group</b>, focusing on{" "}
              <b className="purple"> data visualization</b>,{" "}
              <b className="purple">accessibility compliance</b>, and optimizing
              UI performance. My contributions in enhancing accessibility
              standards (<b className="purple">WCAG</b>) improved usability by{" "}
              <b className="purple">30%</b>, expanding reach to a broader
              audience. Prior to that, I collaborated in an{" "}
              <b className="purple">Agile team</b> at
              <b className="purple">Msys Technologies</b>, where I worked on{" "}
              <b className="purple">responsive UI designs</b> and state
              management solutions. <br />
              <br />
              Currently, I’m advancing my expertise in{" "}
              <b className="purple">business intelligence</b> and
              <b className="purple">data analytics</b> through a{" "}
              <b className="purple">Master’s in Business Analytics</b> at{" "}
              <b className="purple">HULT International Business School </b> 🎓.{" "}
              This analytical perspective allows me to bridge the gap between{" "}
              <b className="purple">
                design, development, and data-driven decision-making
              </b>
              .
              <br />
              <br />I am passionate about creating{" "}
              <b className="purple">intuitive digital experiences</b>,
              optimizing <b className="purple">front-end performance</b>, and
              pushing the boundaries of{" "}
              <b className="purple">modern web technologies</b>. Whether it's
              building for <b className="purple">startups</b> or{" "}
              <b className="purple">enterprise-level solutions</b>, I thrive in
              crafting innovative interfaces that deliver impact.{" "}
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
                  href="https://github.com/vamsi-krish-chiguruwada/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://x.com/vamsikrishchig1"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/vamsi-krish-chiguruwada-532092183/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/vamsi.krish_/profilecard/?igsh=MTh1c3dpem45dGsybg=="
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
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
