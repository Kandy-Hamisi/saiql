import React from "react";
import Navbar from "@/components/navbar/Navbar";
import Hero from "@/sections/hero/Hero";
import AboutSection from "@/sections/aboutSection/AboutSection";

const HomePage = () => {
  return (
    <main className="relative">
      <Navbar />

      <section className="">
        <Hero />
      </section>
      <section className="relative padding">
        <AboutSection />
      </section>
    </main>
  );
};
export default HomePage;
