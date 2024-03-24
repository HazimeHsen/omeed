import About from "@/components/About";
import AppreciationSection from "@/components/AppreciationSection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import TestimonialsSlider from "@/components/Testimnoials";
import Image from "next/image";
const testimonialsData = [
  {
    text: "Omeed was my Executive Coach at Google during a time when my life was at a crossroads with respect to professional and personal growth. Omeed became a catalyst, expertly guiding me on an introspective journey and was pivotal for the leader and person I am today, and continue to strive for. Through insightful questioning and a safe space for exploration, Omeed helped me unearth hidden values that fueled not only my leadership style but also my core identity. This newfound alignment became the compass guiding my career and personal decisions both at Google, and later on when I took on Executive roles at 2 other startups. Omeed's unwavering support and powerful tools empowered me to navigate change with confidence. Even today, years later, I actively revisit notes from our sessions. They're more than reminders; they're echoes of the 'aha!' moments that redefined my path. If you're seeking growth on any level, personal or professional, look no further than Omeed. The journey he guides you on might just change your life, as it did mine.",
    name: "John Doe",
    position: "CEO",
    image: "/images/me/me-3.png",
  },
  {
    text: "Omeed was my Executive Coach at Google during a time when my life was at a crossroads with respect to professional and personal growth. Omeed became a catalyst, expertly guiding me on an introspective journey and was pivotal for the leader and person I am today, and continue to strive for. Through insightful questioning and a safe space for exploration, Omeed helped me unearth hidden values that fueled not only my leadership style but also my core identity. This newfound alignment became the compass guiding my career and personal decisions both at Google, and later on when I took on Executive roles at 2 other startups. Omeed's unwavering support and powerful tools empowered me to navigate change with confidence. Even today, years later, I actively revisit notes from our sessions. They're more than reminders; they're echoes of the 'aha!' moments that redefined my path. If you're seeking growth on any level, personal or professional, look no further than Omeed. The journey he guides you on might just change your life, as it did mine.",
    name: "John Doe",
    position: "CEO",
    image: "/images/me/me-3.png",
  },
  {
    text: "Omeed was my Executive Coach at Google during a time when my life was at a crossroads with respect to professional and personal growth. Omeed became a catalyst, expertly guiding me on an introspective journey and was pivotal for the leader and person I am today, and continue to strive for. Through insightful questioning and a safe space for exploration, Omeed helped me unearth hidden values that fueled not only my leadership style but also my core identity. This newfound alignment became the compass guiding my career and personal decisions both at Google, and later on when I took on Executive roles at 2 other startups. Omeed's unwavering support and powerful tools empowered me to navigate change with confidence. Even today, years later, I actively revisit notes from our sessions. They're more than reminders; they're echoes of the 'aha!' moments that redefined my path. If you're seeking growth on any level, personal or professional, look no further than Omeed. The journey he guides you on might just change your life, as it did mine.",
    name: "John Doe",
    position: "CEO",
    image: "/images/me/me-3.png",
  },
  {
    text: "Omeed was my Executive Coach at Google during a time when my life was at a crossroads with respect to professional and personal growth. Omeed became a catalyst, expertly guiding me on an introspective journey and was pivotal for the leader and person I am today, and continue to strive for. Through insightful questioning and a safe space for exploration, Omeed helped me unearth hidden values that fueled not only my leadership style but also my core identity. This newfound alignment became the compass guiding my career and personal decisions both at Google, and later on when I took on Executive roles at 2 other startups. Omeed's unwavering support and powerful tools empowered me to navigate change with confidence. Even today, years later, I actively revisit notes from our sessions. They're more than reminders; they're echoes of the 'aha!' moments that redefined my path. If you're seeking growth on any level, personal or professional, look no further than Omeed. The journey he guides you on might just change your life, as it did mine.",
    name: "John Doe",
    position: "CEO",
    image: "/images/me/me-3.png",
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
      <Contact />
      <Footer />
    </>
  );
}
