import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import tourent from "../../Assets/Projects/tourent.webp";

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
              imgPath={tourent}
              isBlog={false}
              title="Torrents to Google Drive Downloader"
              description="Torrents to Google Drive Downloader lets you easily download .torrent or magnet files directly to your Google Drive. By using Google Colab, this tool mounts your Drive, installs necessary libraries, and allows you to paste links for seamless downloading, making file management simple and efficient."
              ghLink="https://github.com/vamsi-krish-chiguruwada/.Torrent-to-drive-download-Python"
              demoLink="https://colab.research.google.com/github/vamsi-krish-chiguruwada/.Torrent-to-drive-download-Python/blob/main/torrent_downloader.ipynb"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
