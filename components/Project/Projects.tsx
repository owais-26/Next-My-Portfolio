import { FC } from "react";
import { Project } from "./../../components";
import { projects } from "../../utils/projects";
import { StyledProjects } from "./StyledProjects";
import { StyledSection } from "../Style/StyledHomeContent";
// import Fade from "react-reveal/Fade";

const Projects: FC = () => {
  return (
    <StyledSection  id="projects" aria-label="Projects' Section">
      {/* <Fade top> */}
        <header data-aos="fade-up" data-aos-duration="1500" className="section__header-main">
          <h2 className="section__header-main-head">PROJECTS</h2>
          <p>
            These are some of the projects I built to practice and get better at
            the technologies mentioned above.
          </p>
        </header>
      {/* </Fade> */}
      <StyledProjects data-aos="zoom-in-up" data-aos-duration="1500" >
        {projects.map((project, i) => (
          <Project  key={i} {...project} />
        ))}
      </StyledProjects>
      <p className="section__project-others">
        Check out my other{" "}
        <a
          href="https://github.com/owais-26?tab=repositories"
          target="_blank"
          rel="noreferrer"
        >
          cool projects
        </a>{" "}
        I built over the time.
      </p>
    </StyledSection>
  );
};

export default Projects;
