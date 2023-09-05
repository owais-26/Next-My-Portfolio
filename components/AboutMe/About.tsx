import Link from "next/link";
import { FC } from "react";
// import Fade from "react-reveal/Fade";
import { StyledSubSection } from "../Style/StyledHomeContent";
// import TextSphere from "./TextSphere";

const About: FC = () => {
  return (
    // <Fade left>
    <StyledSubSection data-aos="flip-right" data-aos-duration="2200" className="section__content-about">
      <header>
        <h3>Want to know me?</h3>
      </header>
      <p>
        I am a <b>Full Stack Developer</b> based in Karachi, Pakistan. With a passion for crafting comprehensive and user-centric solutions, I have established a solid foundation in both front-end and back-end development, working with a range of technologies, including <strong>React, Next.js, Node.js, and MongoDB.</strong>
      </p>
      <p>
        I'm currently pursuing a <strong>Bachelor's degree in Computer Science at NED University</strong>, where I've acquired a deep understanding of software development principles and gained hands-on experience with various programming languages and tools.
      </p>
      <p>
        I am thrilled to showcase my work and skills through this platform and eagerly anticipate opportunities to collaborate on future projects.
      </p>

      <Link legacyBehavior href="/#contact">
        <a className="btn btn__primary">Contact Me</a>
      </Link>
      {/* <TextSphere/> */}
    </StyledSubSection>
    // </Fade>
  );
};

export default About;
