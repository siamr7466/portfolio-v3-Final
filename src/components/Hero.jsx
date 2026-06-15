import React from "react";

const Hero = () => {
  return (
    <div className=" mx-8 min-h-[calc(100vh-100px)] flex flex-col justify-center pb-24 pt-12 md:pt-0">
      <h2 className="mb-10 md:mb-20 flex justify-center text-center bg-linear-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl md:text-5xl tracking-tight text-transparent">
        Frontend Developer
      </h2>
      <p className="text-center md:text-left max-w-5xl mx-auto text-gray-300">
        A Software Engineering student and Frontend Developer focused on
        building modern, user-centered web and mobile applications. Beyond
        development, I have worked directly with international clients in the IT
        industry, helping them define project requirements, evaluate technical
        solutions, and transform business ideas into successful digital
        products. This experience has strengthened my ability to bridge the gap
        between business objectives and technical implementation. I work with
        <span className="text-[#61DBFB]"> React.js</span>,
        <span className="text-[rgb(66,165,245)]"> Flutter</span>,
        <span className="text-[#F7DF1E]"> JavaScript</span>, and
        <span className="text-[#0160a8]"> Dart</span> to build responsive,
        scalable, and high-performance applications. My interests include
        frontend engineering, mobile app development, API integration, and
        creating intuitive user experiences. I am passionate about solving
        real-world problems through technology and building products that
        deliver meaningful value to users and businesses.
      </p>
    </div>
  );
};

export default Hero;
