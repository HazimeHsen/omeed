import About from "@/components/About";
import AppreciationSection from "@/components/AppreciationSection";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import TestimonialsSlider from "@/components/Testimnoials";
import Image from "next/image";
const testimonialsData = [
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    name: "John Doe",
    position: "CEO",
    image: "/images/me/me-3.png",
  },
  {
    text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    name: "Jane Doe",
    position: "CTO",
    image: "/images/me/me-1.jpg",
  },
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    name: "John Doe",
    position: "CEO",
    image: "/images/me/me-3.png",
  },
  {
    text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    name: "Jane Doe",
    position: "CTO",
    image: "/images/me/me-1.jpg",
  },
];

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <About />
      <AppreciationSection testimonialsData={testimonialsData} />
      <Footer />
    </>
  );
}
