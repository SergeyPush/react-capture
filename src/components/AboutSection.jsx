import React from "react";
import { About, Description, Hide, Image } from "../styles";
import { motion } from "framer-motion";
import { titleAnimation, fadeAnimaiton, photoAnimation } from "../animation";
import Wave from "./Wave";

import home1 from "../img/home1.png";
const AboutSection = () => {
  return (
    <About>
      <Description>
        <motion.div>
          <Hide>
            <motion.h2 variants={titleAnimation}>We work to make</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnimation}>
              your <span>dreams</span> come
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnimation}>true.</motion.h2>
          </Hide>
          <motion.p variants={fadeAnimaiton}>
            Contact us for any photography or videography ideas that you have.
            We have professionals with amazing skills.
          </motion.p>
          <button>Contact Us</button>
        </motion.div>
      </Description>
      <Image>
        <motion.img
          src={home1}
          alt="Guy with a camera"
          variants={photoAnimation}
        />
      </Image>
      <Wave />
    </About>
  );
};

export default AboutSection;
