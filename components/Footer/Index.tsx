import { FC } from "react";
import { HomeLogo } from "./../../components";
import { CgMail, CgPhone } from "react-icons/cg";
import { StyledFooter } from "./StyledFooter";
// import Fade from "react-reveal/Fade";
import { socials } from "../../utils/socails";

const Index: FC = () => {
  return (
    // <Fade bottom>
      <StyledFooter data-aos="fade-down" data-aos-duration="1500">
        <div className="container">
          <section>
            <HomeLogo />
            <p>Thanks for checking my portfolio.</p>
            <p>I&apos;m currently open to work.</p>
          </section>
          <section id="contact">
            <header>
              <h4>Contact Me</h4>
            </header>
            <ul className="footer__socials">
              {socials.map(({ Icon, href, label }, i) => (
                <li key={i}>
                  <a href={href} aria-label={`my ${label} profile`}>
                    <Icon aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
            <p className="footer__contact-gmail">
              <a href="mailto:owais.ansaricr7@gmail.com">
             
                  <CgMail />
             
                <span>owais.ansaricr7@gmail.com</span>
              </a>
              <a target="_blank" href="https://api.whatsapp.com/send/?phone=%2B923482037868&text&type=phone_number&app_absent=0">
                <CgPhone/>
              <span>+923482037868</span>
              </a>
              
              
            </p>
            
          </section>
        </div>
      </StyledFooter>
    // </Fade>
  );
};

export default Index;
