"use client";
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import TestimonialsSlider from "./Testimnoials";

const AppreciationSection = ({ testimonialsData }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <div
      id="appreciation"
      className="h-screen flex justify-center flex-col py-20 items-center px-4">
      <motion.h1
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 50 },
        }}
        transition={{ duration: 0.5 }}
        className="uppercase font-semibold text-center">
        APPRECIATION
      </motion.h1>
      <motion.h1
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 50 },
        }}
        transition={{ duration: 0.5 }}
        className="uppercase text-2xl lg:text-4xl mb-14 font-semibold max-w-[300px] text-center md:max-w-2xl">
        Reviews From Our Clients
      </motion.h1>

      <TestimonialsSlider testimonials={testimonialsData} />
    </div>
  );
};

export default AppreciationSection;
