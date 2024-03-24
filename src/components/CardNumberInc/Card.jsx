"use client";
import React, { useEffect, useState } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

const Card = ({ data }) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      className="rounded-lg p-2 md:p-5 bg-white shadow-lg md:text-start text-center text-black">
      <div className="text-base md:text-xl text-secondary font-bold">
        {inView && (
          <span>
            <span>+</span>
            <CountUp start={0} end={data.to} duration={2} delay={0} />
          </span>
        )}
      </div>
      <div className="font-bold md:text-base text-sm">{data.title}</div>
    </motion.div>
  );
};

export default Card;
