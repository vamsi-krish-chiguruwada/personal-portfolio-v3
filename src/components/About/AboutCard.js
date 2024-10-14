import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
// Hi Everyone, I am Vamsi Krish.
// I am currently pursuing my master's degree at HALT International Business
// School in the USA, with a focus on data and business analytics. I have 3 years
// of experience working as a software developer, specializing in React.js and web application development
function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Vamsi Krish </span>I am
            currently pursuing my master's degree at{" "}
            <span className="purple">
              {" "}
              HALT International Business School in the USA
            </span>
            , with a focus on data and business analytics
            <br />I have 3 years of experience working as UI Expert and UI
            Developer
            {/* <br />
            I have completed Integrated MSc (IMSc) in Maths and Computing at BIT
            Mesra.
            <br /> */}
            <br />
            <b> </b>
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> 💡 Learning about new technologies and
              innovations
            </li>
            <li className="about-activity">
              <ImPointRight /> 📚 Upskilling through courses and workshops
            </li>
            <li className="about-activity">
              <ImPointRight /> 🎮 Playing Chess
            </li>
            <li className="about-activity">
              <ImPointRight /> 🌍 Traveling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Shaping ideas, one line of code at a time!"{" "}
          </p>
          <footer className="blockquote-footer">Vamsi Krish</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
