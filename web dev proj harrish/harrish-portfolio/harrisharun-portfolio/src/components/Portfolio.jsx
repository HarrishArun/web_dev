import React from "react";

import connector from "../assets/portfolio/connector.png";
import ck from "../assets/portfolio/crystals-kyber.png";
import dealmart from "../assets/portfolio/dealmart.png";
import movieland from "../assets/portfolio/movieland.png";
import movierec from "../assets/portfolio/movierec.png";
import myntra from "../assets/portfolio/myntraclone.png";
import nikeclone from "../assets/portfolio/nike-clone.png";
import oneapp from "../assets/portfolio/oneapp.png";
import portfoio from "../assets/portfolio/portfolio.png";
import retail from "../assets/portfolio/retail.jpg";
import trafficsign from "../assets/portfolio/trafficsign.png";
import voiceassistant from "../assets/portfolio/voice-assistant.jpeg";

const Portfolio = () => {
  const portfolio = [
    {
      id: 1,
      src: oneapp,
      title: "OneApp",
      language: "Flutter",
      style: "bg-cyan-300",
      code: "https://github.com/HarrishArun/oneapp",
      demo: "https://play.google.com/store/apps/details?id=com.oneappnew.harrisharun",
      description:
        "Expertly-crafted Flutter app showcasing my skills with clean, production-grade architecture",
    },
    {
      id: 2,
      src: nikeclone,
      title: "Nike-clone",
      language: "React",
      style: "bg-blue-400",
      code: "https://github.com/HarrishArun/nikeclone-harrisharun",
      demo: "https://nikeclone-harrisharun.netlify.app/",
      description:
        "Replicated a website to showcase proficiency in React and Tailwind CSS.",
    },
    {
      id: 3,
      src: movieland,
      title: "Movie Land",
      language: "React",
      style: "bg-blue-400",
      code: "https://github.com/HarrishArun/movieland ",
      demo: "https://moviewebsite-harrisharun.netlify.app/",
      description:
        "A movie application built using OMDB API, React, and Tailwind CSS",
    },
    {
      id: 4,
      src: retail,
      title: "Retail",
      language: "Flutter",
      style: "bg-cyan-300",
      code: "https://github.com/HarrishArun/retail",
      demo: "https://devpost.com/software/retail-ai",
      description:
        "Full-stack AI-powered application developed for a hackathon (Team Project)",
    },
    {
      id: 5,
      src: portfoio,
      title: "Portfolio",
      language: "React",
      style: "bg-blue-400",
      code: "https://github.com/HarrishArun/harrisharun-portfolio",
      demo: "./",
      description:
        "Artfully designed portfolio website created as part of the web development learning journey",
    },
    {
      id: 6,

      src: myntra,
      title: "Myntra-clone",
      language: "React",
      style: "bg-cyan-400",
      code: "https://github.com/HarrishArun/myntra_clone",
      demo: "https://drive.google.com/file/d/1izyfi12qcc4vtyPwRczslVQKshDElgGw/view",
      description:
        "Recreated the Myntra app during the journey of learning Flutter",
    },
    {
      id: 7,

      src: movierec,
      title: "Movie Recommender System",
      language: "Python",
      style: "bg-yellow-300",
      code: "https://github.com/HarrishArun/codsoft/blob/main/Movie%20suggestion.ipynb",
      demo: "https://www.linkedin.com/posts/harrish-arun-1a8890227_100daysofcode-activity-7111663629640335361-Isef?utm_source=share&utm_medium=member_desktop",
      description:
        "Developed a movie recommender system based on content and user preferences during my internship at codsoft",
    },
    {
      id: 8,

      src: trafficsign,
      title: "Traffic sign recognition",
      language: "Python",
      style: "bg-yellow-300",
      code: "https://github.com/HarrishArun/traffic_sign_recogniton",
      demo: "https://www.canva.com/design/DAFditcovdo/zaiRBRiinJGvZJ9SjuO6rw/view?utm_content=DAFditcovdo&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink",
      description:
        "Developed a traffic sign and speed limit recognition system using OpenCV during my AI ADAS internship at IBM Skillsbuild",
    },
    {
      id: 9,

      src: ck,
      title: "Crystals-Kyber",
      language: "Paper",
      style: "bg-white",
      code: "https://www.canva.com/design/DAFxCekblbU/saYUKcLnqgzfja0Ho0bDCQ/view?utm_content=DAFxCekblbU&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink",
      demo: "https://www.canva.com/design/DAFxCekblbU/saYUKcLnqgzfja0Ho0bDCQ/view?utm_content=DAFxCekblbU&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink",
      description:
        "A study on securing Bitcoin's future with crystal-based Kyber post-quantum encryption for Proof of Work (PoW) and digital signatures (Team Project)",
    },
    {
      id: 10,

      src: dealmart,
      title: "Dealmart",
      language: "Flutter",
      style: "bg-cyan-300",
      code: "https://github.com/HarrishArun/DealMart/tree/master/deal_ud",
      demo: "https://play.google.com/store/apps/details?id=com.Harrisharun.Dealmart&pcampaignid=web_share",
      description:
        "Well-designed full-stack application enabling users to stay updated on recent offers from their preferred e-commerce platformss",
    },
    {
      id: 11,

      src: voiceassistant,
      title: "Voice assistant for Windows",
      language: "Python",
      style: "bg-yellow-300",
      code: "https://github.com/HarrishArun/harvis-voiceassistant",
      demo: "https://www.linkedin.com/posts/harrish-arun-1a8890227_100daysofcode-ai-voiceassistant-activity-7111664803823185921-c1CT?utm_source=share&utm_medium=member_desktopn",
      description:
        "Python-based voice assistant designed for Windows using its libraries",
    },
    {
      id: 11,

      src: connector,
      title: "Connector",
      language: "Figma",
      style: "bg-white",
      code: "https://www.figma.com/file/UPI7l1Wb3Yf4xXDr7u5lkT/Connector-(Copy)?type=design&node-id=0-1&mode=design",
      demo: "https://www.figma.com/file/UPI7l1Wb3Yf4xXDr7u5lkT/Connector-(Copy)?type=design&node-id=0-1&mode=design",
      description:
        "Created a mock website in Figma to showcase my UI/UX skills, soon to be deployed",
    },
  ];
  return (
    <div
      name="portfolio"
      className=" bg-gradient-to-b to-black from-gray-800 w-full text-white md:h-full flex items-centes justify-center "
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center  w-full md:m-16  ">
        <div className="pb-8 ">
          <p className=" text-[#02ecff] text-2xl sm:text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
          <p className="py-4 text-sm sm:text-xl">
            Check out my recent works here
          </p>
        </div>

        <div className="grid gap-3 grid-cols-2 md:grid-cols-3 sm:gap-8  px:0 ">
          {portfolio.map(
            ({ id, src, demo, code, title, language, style, description }) => (
              <div
                key={id}
                className="card hover:scale-105 duration-500 bg-base-100 shadow-xl shadow-gray-800  border border-gray-700"
              >
                <figure>
                  <img src={src} alt="projects" />
                </figure>
                <div className="px-4 py-5  sm:card-body">
                  <h2 className="text-sm sm:text-base font-bold mr-3 sm:card-title ">
                    {title + " "}
                    <div className={` badge text-black font-bold ${style}`}>
                      {language}
                    </div>
                  </h2>
                  <p className="m-2 text-xs sm:text-sm">{description}</p>
                  <div className="sm:card-actions justify-end">
                    <a href={demo} target="_blank" rel="noreferrer">
                      <div className="badge badge-outline">Demo</div>
                    </a>
                    <a href={code} target="_blank" rel="noreferrer">
                      {" "}
                      <div className="badge badge-outline">Code</div>
                    </a>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
