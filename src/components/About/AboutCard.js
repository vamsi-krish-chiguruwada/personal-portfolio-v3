import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
// Hi Everyone, I am Vamsi Krish.
// I am currently pursuing my master's degree at HULT International Business
// School in the USA, with a focus on data and business analytics. I have 3 years
// of experience working as a software developer, specializing in React.js and web application development
function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi! I’m <span className="purple">Vamsi Krish</span>, a{" "}
            <span className="purple">UI expert and frontend developer</span>{" "}
            with over <span className="purple">three years of experience</span>{" "}
            building scalable, accessible, and data-rich web applications using
            modern frontend technologies.
            <br />
            <br />
            I’ve worked on impactful enterprise projects at{" "}
            <span className="purple">Yash Technologies</span> and{" "}
            <span className="purple">Msys Technologies</span>, building
            solutions for clients like{" "}
            <span className="purple">Merck Group</span>. My work has spanned
            data visualization, accessibility compliance (WCAG), and real-time
            UI development using tools like{" "}
            <span className="purple">React.js</span>,{" "}
            <span className="purple">Redux</span>,{" "}
            <span className="purple">TypeScript</span>, and{" "}
            <span className="purple">Tailwind CSS</span>.
            <br />
            <br />
            I’m passionate about creating intuitive digital experiences and
            solving real-world problems through thoughtful design and scalable
            code.
            <br />
            <br />
            Apart from coding, some other activities that I love to do:
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

          <br />
          {/* <ul>
            <li className="about-activity">
              <ImPointRight /> <b>Languages:</b> JavaScript (ES6+), TypeScript,
              Python, HTML5, CSS3
            </li>
            <li className="about-activity">
              <ImPointRight /> <b>Frameworks & Libraries:</b> React.js, Redux,
              Recoil, Node.js, Next.js, Tailwind CSS, Material UI
            </li>
            <li className="about-activity">
              <ImPointRight /> <b>Build & Testing Tools:</b> Webpack, Babel,
              Jest, Mocha, Cypress
            </li>
            <li className="about-activity">
              <ImPointRight /> <b>UI/UX & Design Tools:</b> Figma, Sketch,
              Bootstrap
            </li>
            <li className="about-activity">
              <ImPointRight /> <b>Databases:</b> MySQL, Firebase
            </li>
            <li className="about-activity">
              <ImPointRight /> <b>Version Control & Deployment:</b> Git, GitHub,
              Netlify, GitHub Pages
            </li>
            <li className="about-activity">
              <ImPointRight /> <b>Soft Skills:</b> Agile collaboration,
              problem-solving, fast learning, mentoring junior devs
            </li>
          </ul> */}
          <h3 style={{ textAlign: "center" }}>
            ⚒️{" "}
            <span style={{ color: "#d4af37", fontWeight: "bold" }}>
              Technical Skillset
            </span>
          </h3>
          <ul>
            <li className="about-activity">
              <ImPointRight />{" "}
              <span style={{ color: "#d4af37", fontWeight: "bold" }}>
                Languages:
              </span>{" "}
              JavaScript (ES6+), TypeScript, Python, HTML5, CSS3
            </li>
            <li className="about-activity">
              <ImPointRight />{" "}
              <span style={{ color: "#d4af37", fontWeight: "bold" }}>
                Frameworks & Libraries:
              </span>{" "}
              React.js, Redux, Recoil, Node.js, Next.js, Tailwind CSS, Material
              UI
            </li>
            <li className="about-activity">
              <ImPointRight />{" "}
              <span style={{ color: "#d4af37", fontWeight: "bold" }}>
                Build & Testing Tools:
              </span>{" "}
              Webpack, Babel, Jest, Mocha, Cypress
            </li>
            <li className="about-activity">
              <ImPointRight />{" "}
              <span style={{ color: "#d4af37", fontWeight: "bold" }}>
                UI/UX & Design Tools:
              </span>{" "}
              Figma, Sketch, Bootstrap
            </li>
            <li className="about-activity">
              <ImPointRight />{" "}
              <span style={{ color: "#d4af37", fontWeight: "bold" }}>
                Databases:
              </span>{" "}
              MySQL, Firebase
            </li>
            <li className="about-activity">
              <ImPointRight />{" "}
              <span style={{ color: "#d4af37", fontWeight: "bold" }}>
                Version Control & Deployment:
              </span>{" "}
              Git, GitHub, Netlify, GitHub Pages
            </li>
            <li className="about-activity">
              <ImPointRight />{" "}
              <span style={{ color: "#d4af37", fontWeight: "bold" }}>
                Soft Skills:
              </span>{" "}
              Agile collaboration, problem-solving, fast learning, mentoring
              junior devs
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Shaping ideas, one line of code at a time!"
          </p>
          <footer className="blockquote-footer">Vamsi Krish</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
