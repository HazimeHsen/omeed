"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="min-h-screen flex lg:flex-row flex-col items-center lg:justify-between justify-center lg:text-start text-center pt-28 md:pt-20 px-4 lg:px-20">
      <div className="flex flex-col lg:items-start items-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.5 }}
          className="uppercase text-3xl lg:text-5xl font-semibold max-w-[300px] md:max-w-2xl">
          Have an unfair Advantage
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.8 }}
          className="text-sm md:text-base max-w-xl mt-4">
          I&apos;m Omeed,
          <Link className="underline mx-1 text-orange-200" href="#">
            Fortune 50 Executive Coach
          </Link>
          , and
          <Link className="underline mx-1 text-orange-200" href="#">
            Chief of Staff at Google
          </Link>
          . Distinguished
          <Link className="underline mx-1 text-orange-200" href="#">
            Stanford graduate
          </Link>
          shaping the future of leadership and organizational excellence.
        </motion.div>
        <div className="mt-12">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 1.1 }}
            className="uppercase text-lg md:text-xl lg:text-2xl font-semibold max-w-lg">
            Trusted By:
          </motion.h1>
          <div className="flex items-center gap-10 mt-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 1.3 }}>
              <Image
                className="md:w-[100px] w-[80px] object-contain"
                width={100}
                height={100}
                src="/images/companies/google.png"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 1.4 }}>
              <Image
                className="md:w-[100px] w-[80px] object-contain"
                width={100}
                height={100}
                src="/images/companies/bcg.png"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 1.5 }}>
              <Image
                className="md:w-[100px] w-[80px] object-contain"
                width={100}
                height={100}
                src="/images/companies/stanford.png"
              />
            </motion.div>
          </div>
        </div>
      </div>
      <div className=" ">
        <div className="flex relative md:ml-0 ml-20">
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 2 }}
            className="rounded-full absolute md:top-14 top-10 -left-20 md:-left-36 md:text-base text-xs h-fit bg-secondary px-3 md:px-6 py-2 md:py-2 font-bold transition-colors duration-200 hover:bg-secondary/80">
            SCHEDULE A CALL
          </motion.button>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 1.5 }}>
            <Image
              width={300}
              height={500}
              className="md:w-[300px] w-[200px]"
              src="/images/me/me-3.png"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
