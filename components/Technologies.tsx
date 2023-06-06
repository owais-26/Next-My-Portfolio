import { FC } from "react";
// import Fade from "react-reveal/Fade";
import { technologies } from "../utils/technologies";
import { StyledSubSection } from "./Style/StyledHomeContent";

const Technologies: FC = () => {
  return (
    // <Fade right>
      <StyledSubSection data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2200" className="section__content-skills">
        <header>
          <h3>Skills and Technologies</h3>
        </header>
        <ul className="technologies">
          {technologies.map((tech, i) => (
            <li key={i} className="tech">
              {tech}
            </li>
          ))}
        </ul>
      </StyledSubSection>
    // </Fade>
  );
};

export default Technologies;
