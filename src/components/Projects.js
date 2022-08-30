import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import ecomm from "../assets/img/ecomm.png";
import tasktrack from "../assets/img/tasktracker.png";
import hopehack from "../assets/img/Hopehacks.png";
import projImg3 from "../assets/img/project-img3.png";
import counter from "../assets/img/counter.png";
import tictac from "../assets/img/tictac.png";
import better from "../assets/img/bettermind.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Ecommerce",
      description: "R2H",
      imgUrl: ecomm,
    },
    {
      title: "Task Tracker",
      description: "R2H",
      imgUrl: tasktrack,
    },
    {
      title: "Counter -react",
      description: "--",
      imgUrl: counter,
    },
    {
      title: "Hope Hacks",
      description: "R2H (group)",
      imgUrl: hopehack,
      link: "https://hopehacks-group9.herokuapp.com/"
    },
    {
      title: "Tic Tac Toe -react",
      description: "--",
      imgUrl: tictac,
    },
    {
      title: "Code for Justice",
      description: "R2H (group)",
      imgUrl: better,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>I am currently revamping all of these websites. Tabs 2 and 3 were made for upcoming projects so stay tuned!</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">R2H</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Coming soon</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Coming soon</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>Reserved for future projects.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Reserved for future projects.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
