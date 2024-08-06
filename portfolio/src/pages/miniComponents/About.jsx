import React, { useEffect, useState } from "react";
import prince from "../../assets/prince.jpg"
const About = () => {
  return (
    <div className="w-full flex flex-col overflow-x-hidden">
      <div className="relative">
        <h1
          className="flex gap-4 items-center text-[2rem] sm:text-[2.75rem] 
          md:text-[3rem] lg:text-[3.8rem] leading-[56px] md:leading-[67px] 
          lg:leading-[90px] tracking-[15px] mx-auto w-fit font-extrabold about-h1"
          style={{
            background: "hsl(222.2 84% 4.9%)",
          }}
        >
          ABOUT <span className="text-tubeLight-effect font-extrabold">ME</span>
        </h1>
        <span className="absolute w-full h-1 top-7 sm:top-7 md:top-8 lg:top-11 z-[-1] bg-slate-200"></span>
      </div>
      <div className="text-center">
        <p className="uppercase text-xl text-slate-400">
          Allow me to introduce myself.
        </p>
      </div>
      <div>
        <div className="grid md:grid-cols-2 my-8 sm:my-20 gap-14 text-justify">
          <div className="flex justify-center items-center">
            <img
              src={prince}
              alt="avatar"
              className="rounded-full p-1 sm:p-4  h-[190px] sm:h-[210px] md:h-[250px] lg:h-[350px]"
            />
          </div>
          <div className="flex justify-center flex-col tracking-[1px] text-xl gap-5 text-justify">
            <p>
              My name is M S Prince, but my followers call me Prince. I will
              graduate in Mechnical Engineering from SRMU around 2018. Then I
              decided to make a Carrrier in Web Development. So I work as a web
              developer and freelancer. My hobbies include watching movies,
              series, playing video games, and occasionally cooking.
            </p>
            <p className="text-justify">
              I have interests not only in technology but also in movies,
              series, video games, and cooking. I excel in meeting deadlines for
              my work.
            </p>
          </div>
        </div>
        <p className="tracking-[1px] text-xl text-justify">
          My dedication and perseverance in timely delivery of work are integral
          to me. I maintain the courage to face any challenges for extended
          periods.
        </p>
        <p className="tracking-[1px] text-xl mt-5 text-justify">
          "Currently I Work On My Dream Project that is
          <span className="gradient-text font-extrabold text-2xl">
            {" "}
            A Doctor's Diary
          </span>
          "
        </p>
      </div>
    </div>
  );
};

export default About;
