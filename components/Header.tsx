import Link from "next/link";
import Image from "next/image";
import { FC } from "react";
import { StyledHeader } from "./Style/StyledHomeContent";
import headerBg from "./../public/desktop.gif";
import React , { useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'animate.css';
import "aos/dist/aos.css";
import Typed from "typed.js";

const Header: FC = () => {
   const spanRef = React.useRef(null);
   useEffect(() => {
    AOS.init({
     
    });
     const typed = new Typed(spanRef.current, {
      strings: ["Front End Developer.", "React Developer.", "Next.js Developer.", "UI/UX Designer."],
      typeSpeed: 100,
      backSpeed: 80,
      loop: true,
      cursorChar: "|",
    });

    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <StyledHeader   className="">
      <div  className="container">
        <div  className="header__content animate__animated animate__fadeIn ">
          <span data-aos="fade-up" data-aos-duration="2200" className="header__greeting">Hello Fellas! I&apos;m </span>
          <h2>
            
            <span
      
      data-aos="fade-up"
      data-aos-duration="2200"
      className="header__name"
    >
      Owais Ansari,
    </span>
          </h2>
          <p data-aos="fade-up" data-aos-duration="2200" className="header__intro">
            I&apos;m a Passionate <span ref={spanRef}></span>
          </p>
          <div data-aos="fade-up" data-aos-duration="2200" className="header__links">
            <Link legacyBehavior  href="/#projects">
              <a className="btn__primary btn">See My Work</a>
            </Link>
            <a
              className="btn__secondary btn"
              href="/Resume Muhammad Owais Ansari-4.pdf"
              target="_blank"
              rel="noreferrer noopener"
            >
              View Resume
            </a>
          </div>
        </div>
        <div data-aos="fade-down" data-aos-duration="1500" className="header__svg"  aria-hidden="true">
          <Image  alt="" src={headerBg}   className="header__svg"/>
        </div>
      </div>
    </StyledHeader>
  );
};

export default Header;
