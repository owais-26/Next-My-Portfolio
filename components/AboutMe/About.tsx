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
          I am a <b>Front-end Developer</b>  based in Karachi, Pakistan. With a passion for developing elegant and user-friendly interfaces, I have developed a strong foundation in front-end development and have experience working with a variety of technologies, including <strong>React and Next.js.</strong> 
        </p>
        <p>
         I&apos;m currently pursuing <strong>Bachelor&apos;s degree in Computer Science from NED University</strong>, where I developed a strong understanding of software development principles and gained hands-on experience working with various programming languages and tools.
        </p>
        <p>
          I am excited to showcase my work and skills through this platform and look forward to the opportunity to collaborate on future projects.
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
