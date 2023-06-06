import React, { useEffect, useState, useRef } from "react";
// import './TextSphere.css';
import TagCloud from "TagCloud";
// import { SectionWrapper } from "../hoc";
const TextSphere = () => {
  const [instance, setInstance] = useState(null)
 
 // Animation settings for Text Cloud
  useEffect(() => {
    if(!instance){
    const container = ".tagcloud";
    const texts = [
      "HTML",
      "CSS",
      "Redux",
      "JavaScript",
      "React",
      "Tailwind",
      "Material UI",
      "NodeJS",
      "Babel",
      "Jquery",
      "ES6",
      "GIT",
      "GITHUB",
    ];
    let radii;
    function radiusValue() {
      if (window.screen.width <= 778) {
        radii = 160;

      } else {
        radii = 350;
      }
      return radii;
    }

    const options = {
      radius: radiusValue(),
      maxSpeed: "fast",
      initSpeed: "fast",
      direction: 435,
      keep:true,
      size:1,
    };

    const inst  = TagCloud(container, texts, options);
    setInstance(inst)
    // container.destroy()
    console.log(instance)
  }
  }, [ instance]);

  return (
    <>
      <div className="text-shpere -mt-20">
        {/* span tag className must be "tagcloud"  */}
        <span className="tagcloud lg:text-[1.4rem]  sm:text-[0.3rem] "></span>
      </div>
    </>
  );
};

export default TextSphere