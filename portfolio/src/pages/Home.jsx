import React from "react";
import Hero from "./miniComponents/Hero";
import Timeline from "./miniComponents/Timeline";
import Skills from "./miniComponents/Skills";
import MyApps from "./miniComponents/MyApps";
import About from "./miniComponents/About";
import { ThemeProvider } from "@/components/theme-provider";
import Portfolio from "./miniComponents/Portfolio";
import Contact from "./miniComponents/Contact";

const Home = () => {
  return (
    <article className="px-5 mt-10 sm:mt-8 md:mt-10 lg:mt-12 xl:mt-16 sm:mx-auto w-full max-w-[1050px] flex flex-col gap-14 ">
      <Hero />
      <Timeline />
      <About />
      <Skills />
      <Portfolio />
      <MyApps />
      <Contact />
    </article>
  );
};

export default Home;
