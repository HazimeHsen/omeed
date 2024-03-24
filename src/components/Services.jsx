"use client";
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import CardNumberInc from "./CardNumberInc";

const ServiceItem = ({ title, descriptions }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      id="#services"
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 50 },
      }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center p-5 bg-secondary rounded-lg">
      <h1 className="text-xl font-bold mb-3 text-center">{title}</h1>
      <div className="text-center font-semibold text-sm md:text-base">
        {descriptions.map((description, index) => (
          <p key={index}>{description}</p>
        ))}
      </div>
    </motion.div>
  );
};

const Services = () => {
  const services = [
    {
      title: "Executive Coaching",
      descriptions: [
        "We'll tailor a personal development program for you by:",
        "1) Identifying the actual issues we're tackling.",
        "2) Designing a strong strategy through a comprehensive approach.",
        "3) Implementing changes effectively, gaining support from key people.",
      ],
    },
    {
      title: "Team Coaching",
      descriptions: [
        "Teams work better together to achieve great results. But, challenges like trust, making decisions, and communication can hold them back.",
        "We'll help find and solve these issues to unlock true potential.",
      ],
    },
    {
      title: "Business Transformation",
      descriptions: [
        "Teams aim to excel and achieve more together. But, they often face challenges with trust, alignment, decision-making, and communication.",
        "We'll help identify these obstacles to unlock potential and boost outcomes.",
      ],
    },
  ];

  return (
    <div className="py-20 flex justify-center md:px-10 px-4">
      <div className="flex flex-col justify-center items-center">
        <h1 className="uppercase text-3xl lg:text-5xl mb-7 md:mb-14 font-semibold max-w-[300px] text-center md:max-w-2xl">
          How I Can Help <span className="text-secondary"> You</span>
        </h1>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
          {services.map((service, index) => (
            <ServiceItem
              key={index}
              title={service.title}
              descriptions={service.descriptions}
            />
          ))}
        </div>
        <CardNumberInc />
      </div>
    </div>
  );
};

export default Services;
