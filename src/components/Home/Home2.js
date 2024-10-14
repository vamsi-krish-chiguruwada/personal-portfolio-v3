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
              Hey there! 👋 I'm <b className="purple">Vamsi Krish</b>, a
              passionate web developer with 3+ years of experience crafting
              sleek, user-friendly web apps.
              <br />
              <br />I am fluent in classics like I'm fluent in{" "}
              <b className="purple">JavaScript</b>,{" "}
              <b className="purple">HTML & CSS</b>,{" "}
              <b className="purple">Redux</b> especially with modern frameworks
              like <b className="purple">React.js</b> 🚀
              {/* <i>
                <b className="purple"> C++, Javascript and Go. </b>
              </i> */}
              <br />
              <br />
              Currently, I'm pursuing my master’s at HALT International Business
              School 🎓 to sharpen my skills in data and business analytics.
              &nbsp;
              <i>
                <b className="purple">Web Technologies and Products </b> and
                also in areas related to <b className="purple">Blockchain.</b>
              </i>
              <br />
              <br />I love working with <b className="purple">startups</b> ,
              building cool stuff with <b className="purple"> React </b>,{" "}
              <b className="purple"> Node.js</b>, and anything that pushes the
              envelope of innovation. 💡 Let’s create something awesome
              together! 💻✨
              {/* <i>
                <b className="purple">
                  {" "}
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> React.js and Next.js</b>
              </i> */}
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
