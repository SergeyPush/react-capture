import React, { useState } from "react";
import styled from "styled-components";
import { About } from "../styles";
import Toggle from "./Toggle";
import { AnimateSharedLayout } from "framer-motion";
import useScroll from "../components/useScroll";
import { fadeAnimaiton, scrollReveal } from "../animation";

const FaqSection = () => {
  const [faqToggle, setFaqToggle] = useState(false);
  const [element, controls] = useScroll();
  return (
    <div>
      <Faq
        variants={scrollReveal}
        animate={controls}
        initial="hidden"
        ref={element}
      >
        <h2>
          Any Questions <span>FAQ</span>
        </h2>
        <AnimateSharedLayout>
          <Toggle title="How Do I Start?">
            <div className="answer" onClick={() => setFaqToggle(!faqToggle)}>
              <p>Lorem ipsum dolor sit amet.</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Maiores, rem
              </p>
            </div>
          </Toggle>
          <Toggle title="Daily scedule">
            <div className="answer">
              <p>Lorem ipsum dolor sit amet.</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Maiores, rem
              </p>
            </div>
          </Toggle>
          <Toggle title="Different Payments methods">
            <div className="answer">
              <p>Lorem ipsum dolor sit amet.</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Maiores, rem
              </p>
            </div>
          </Toggle>
          <Toggle title="What products do you offer?">
            <div className="answer">
              <p>Lorem ipsum dolor sit amet.</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Maiores, rem
              </p>
            </div>
          </Toggle>
        </AnimateSharedLayout>
      </Faq>
    </div>
  );
};

const Faq = styled(About)`
  display: block;
  span {
    display: block;
  }
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  .faq-line {
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }
  .question {
    padding-top: 3rem;
    cursor: pointer;
  }
  .answer {
    padding: 2rem 2rem;
    p {
      padding: 1rem 0rem;
    }
  }
`;

export default FaqSection;
