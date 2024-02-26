import Link from "next/link";
import { FC } from "react";
// import Fade from "react-reveal/Fade";
import { StyledSubSection } from "../Style/StyledHomeContent";
// import TextSphere from "./TextSphere";

const About: FC = () => {
  return (
    // <Fade left>
    <StyledSubSection
      data-aos="flip-right"
      data-aos-duration="2200"
      className="section__content-about"
    >
      <header>
        <h3>Want to know me?</h3>
      </header>
      <p>
    As a <b>Full Stack Software Engineer</b>, I specialize in crafting user-centric solutions using technologies like React, Angular, Next.js, Node.js, ASP.NET, SQL and MongoDB. 
</p>
<p>
    Currently pursuing a <b>Bachelor's degree in Computer Science at NED University</b>, I possess a deep understanding of software development principles and diverse programming languages. 
</p>
<p>
    With experience as a <b>Software Engineer</b> (Remote) in OctDaily, Florida, USA, I contribute to various development aspects, including UI creation with Angular, backend development using C#/.NET, MySQL Server management, bug resolution throughout SDLC, agile project management, team collaboration via Jira, and version control through Azure DevOps.
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
