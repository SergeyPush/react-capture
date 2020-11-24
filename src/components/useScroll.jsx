import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";

import React from "react";

const useScroll = () => {
  const controls = useAnimation();
  const [element, view] = useInView({ threshold: 0.2 });

  // view ? controls.start("show") : controls.start("hidden");
  if (view) {
    controls.start("show");
  } else {
    controls.start("hidden");
  }
  return [element, controls];
};

export default useScroll;
