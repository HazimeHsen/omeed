"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const About = () => {
  const controlsText = useAnimation();
  const controlsImage = useAnimation();
  const [refText, inViewText] = useInView();
  const [refImage, inViewImage] = useInView();

  useEffect(() => {
    if (inViewText) {
      controlsText.start("visible");
    }
    if (inViewImage) {
      controlsImage.start("visible");
    }
  }, [controlsText, inViewText, controlsImage, inViewImage]);

  return (
    <div
      id="about"
      className="flex flex-row items-center justify-center h-[80vh]">
      <motion.div
        ref={refText}
        initial="hidden"
        animate={controlsText}
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 50 },
        }}
        transition={{ duration: 0.5 }}
        className="w-full md:w-1/2 h-full flex justify-center text-center items-center text-2xl md:text-4xl px-4 py-6 font-bold text-black bg-[#f6f6f6]">
        <div className="md:max-w-md">
          COACHING LEADERS TO ACHIEVE IMPOSSIBLE RESULTS, COACHING
        </div>
      </motion.div>
      <motion.div
        ref={refImage}
        initial="hidden"
        animate={controlsImage}
        variants={{
          visible: { opacity: 1, scale: 1 },
          hidden: { opacity: 0, scale: 0.8 },
        }}
        transition={{ duration: 0.5 }}
        className="w-full md:w-1/2 h-full flex justify-center items-center px-4 py-6 bg-white">
        <Image
          width={300}
          height={300}
          objectFit="contain"
          src="/images/me/me-1.jpg"
        />
      </motion.div>
    </div>
  );
};

export default About;
