"use client";
import React, { useState, useEffect } from "react";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import Logo from "../Logo";
import BurgerMenu from "./BurgerMenu";
import MenuLinks from "./MenuLinks";

function Navbar() {
  const [isGlassy, setIsGlassy] = useState(false);
  const logoControls = useAnimation();
  const burgerMenuControls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const glassyThreshold = 50; // Adjust this threshold as needed

      // Check if the scroll position is beyond the threshold to determine transparency
      setIsGlassy(scrollPosition > glassyThreshold);
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    // Start animation for the logo sliding from left
    logoControls.start({
      x: 0, // End position
      transition: { duration: 0.5, type: "tween" }, // Adjust duration as needed
    });

    // Start animation for the burger menu sliding from right
    burgerMenuControls.start({
      x: 0, // End position
      transition: { duration: 0.5, type: "tween" }, // Adjust duration as needed
    });
  }, [logoControls, burgerMenuControls]);

  return (
    <div
      className={`fixed top-0 left-0 z-50 w-full flex items-center justify-between pr-4 pl-6 md:px-8 bg-primary transition-all duration-200`}>
      <motion.div
        className="relative z-50"
        initial={{ x: -150 }} // Initial position for the logo sliding from left
        animate={logoControls}>
        <Logo />
      </motion.div>
      <AnimatePresence>
        <motion.div
          className="relative flex items-center"
          initial={{ x: 100 }} // Initial position for the burger menu sliding from right
          animate={burgerMenuControls}>
          <div className="flex items-center gap-8">
            <div className="hidden md:block">
              <MenuLinks />
            </div>
          </div>
          <div className="block md:hidden">
            <BurgerMenu />
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default Navbar;
