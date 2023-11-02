"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Node.js</li>
        <li>Express</li>
        <li>SQL</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>Data structures</li>
        <li>C(Programming language)</li>
        <li>Data Science</li>
        <li>Python</li>
        <li>Machine Learning</li>
        <li>Java(Programming language)</li>
        <li>Artificial Intelligence</li>
        <li>Business Analytics</li>

      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Kalinga Institute of Industrial technology,Bhubaneswar (B.Tech,CSE)</li>
        <li>Indian Institute of Technology,Madras (BS,Data Science and Applications) </li>
        <li>Narayana IIT Academy,Visakhapatnam (High school,PCM)</li>
        <li>Swetha Chalapathi Samasthanam EM School (Matriculation)</li>

      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>COMPLETE PYTHON COURSE (UDEMY)</li>
        <li>JAVA: DSA COURSE (CODING NINJAS)</li>
        <li>FULL STACK WEB DEVELOPMENT (UDEMY)</li>
      </ul>
    ),
  },
  {
    title: "Internships",
    id: "Internships",
    content: (
      <ul className="list-disc pl-2">
        <li>Code Clause Web Development Internship</li>
        <li>Internpe Web Development Internship</li>
        <li>Bharat Intern Full-stack Web Development Internship</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={1500} height={1500} alt="about image" />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
          I am a passionate and analytical fresher with a strong interest in web development and data science, aiming to leverage my skills and knowledge to create innovative and impactful solutions for complex problems. 

          I have also gained hands-on experience in full-stack web development, working as a web developer at AISoC, and worked as intern in some startups where I am involved in building and maintaining web applications using various technologies and frameworks, such as HTML,CSS, and JavaScript. Additionally, I am a core member of JITSIE, IIT Madras, a society for innovation and entrepreneurship, where I collaborate with other students and faculty to develop and implement projects related to artificial intelligence, machine learning, and data science. I have also completed a certification course from Coding Ninjas, where I acquired proficiency in Python, and Java. Some of the skills that I possess and want to further develop are problem solving, communication, computer science, and data analysis. My goal is to find an entry-level position that allows me to apply and enhance my skills and knowledge, and to contribute to the advancement of web development and data science.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("Internships")}
              active={tab === "Internships"}
            >
              {" "}
              Internships{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
