"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  const email = "saimanikantapatro8@gmail.com"; // Your email address

  const handleContactClick = () => {
    window.location.href = `mailto:${email}`;
  };

  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
          <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(to right, #0ea5ea, #0bd1d1)' }}>
              Hello, I&apos;m{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "Sai Manikanta",
                1000,
                "Web Developer",
                1000,
                "Data Enthusiast",
                1000,
                "AI/ML Developer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            Passionate Fresher in Data Science | Driving Innovation in AI, ML, and Data Science with Proficiency in C, Python and Java|Full Stack Web Developer|Building Seamless Digital Experiences
          </p>
          <div>
          <button
  onClick={handleContactClick}
  className="px-6 inline-block py-3 w-half sm:w-auto md:w-50 rounded-full mr-4"
  style={{ backgroundImage: 'linear-gradient(90deg, #0ea5ea, #0bd1d1 51%, #0ea5ea)' }}
>
  Contact me
</button>

<a
  href="https://resume.io/r/qR7O3g02C"
  className="px-1 inline-block py-1 w-half sm:w-auto md:w-50 rounded-full mt-3"
  style={{ backgroundImage: 'linear-gradient(90deg, #0ea5ea, #0bd1d1 51%, #0ea5ea)' }}
>
  <span className="block text-white bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
    Download CV
  </span>
</a>

          </div>
        </motion.div>
        <div className="col-span-4 place-self-center mt-4 lg:mt-0">
          <Image
            src="/images/ill.png"
            alt="Your Image"
            width={1800}
            height={1800}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
