import React from "react";
import Image from "next/image";
import { Button } from "@nextui-org/react";

export const HeroSection = () => {
  return (
    <div className="relative px-0 container flex flex-col lg:flex-row lg:flex-grow xl:max-w-none text-black dark:text-white m-0 min-h-lvh">
      <div className="relative z-10 w-full bg-off-white dark:bg-background-dark bg-[linear-gradient(to_right,#eaeaea_1px,transparent_1px),linear-gradient(to_bottom,#eaeaea_1px,transparent_1px)] bg-[size:6rem_4rem] dark:bg-[linear-gradient(to_right,#1b1b1b_1px,transparent_1px),linear-gradient(to_bottom,#1b1b1b_1px,transparent_1px)]">
        <div className="relative py-6 md:mt-28 flex flex-col md:flex-row">
          <div className="p-4 md:w-2/3 xl:pl-20">
            <h1 className="text-4xl font-bold text-yellow-dark tracking-tighter lg:text-5xl xl:text-7xl md:pl-16 ">
              Junior Full Stack Developer
            </h1>
            <h2 className="text-2xl tracking-tighter pt-3 md:pl-16 lg:text-3xl xl:text-4xl">
              Hello!! I'm <span className="text-yellow-dark">Carlos Nina.</span>
              <br />I am a final-year Systems Engineering student at Bolivian
              Catholic University (UCB) with a strong background in{" "}
              <span className="text-yellow-dark">
                full-stack web development and DevOps.
              </span>{" "}
              I have successfully led and contributed to multiple projects,
              earning commendations for performance and innovation.
            </h2>
            <div className="flex flex-col items-center lg:flex-row lg:justify-center lg:items-center lg:gap-10 lg:w-full mt-8 lg:ml-16 ">
              <Button
                as="a"
                href="public\CurriculumVitae_CarlosNina.pdf"
                download
                className="w-full md:w-auto text-2xl font-bold bg-white dark:bg-background-darker hover:bg-gray-100 dark:hover:bg-gray-700 shadow-lg text-black dark:text-white py-4 px-6 lg:px-10 flex items-center justify-center relative transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110"
              >
                CV
              </Button>
              <div className="flex space-x-4 mt-4 lg:mt-0">
                <Button
                  as="a"
                  href="https://github.com/CarlosFULLHD"
                  target="_blank"
                  className="w-full md:w-auto text-2xl font-bold bg-white dark:bg-background-darker hover:bg-gray-100 dark:hover:bg-gray-700 shadow-lg text-black dark:text-white py-4 px-6 lg:px-10 flex items-center justify-center relative transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110"
                >
                  <img
                    src="https://skillicons.dev/icons?i=github"
                    alt="GitHub"
                    className="w-8 h-8"
                  />
                </Button>
                <Button
                  as="a"
                  href="https://www.linkedin.com/in/carlos-nina-reynaga/"
                  target="_blank"
                  className="w-full md:w-auto text-2xl font-bold bg-white dark:bg-background-darker hover:bg-gray-100 dark:hover:bg-gray-700 shadow-lg text-black dark:text-white py-4 px-6 lg:px-10 flex items-center justify-center relative transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110"
                >
                  <img
                    src="https://skillicons.dev/icons?i=linkedin"
                    alt="LinkedIn"
                    className="w-8 h-8"
                  />
                </Button>
              </div>
            </div>
            {/* <h3 className="text-2xl tracking-tighter pt-3 md:pl-16  lg:text-3xl xl:text-4xl">
              Tech Stack:
            </h3>
            <div className="flex flex-row p-2 gap-x-4 bg-white shadow-lg rounded-md w-64 mx-auto md:ml-32">
              <img
                src="next-js.svg"
                alt="Next JS React Framework icon"
                width={75}
                height={75}
                className=""
              />
              <img
                src="spring.svg"
                alt="Spring boot JAVA Framework"
                width={75}
                height={75}
                className=""
              />
              <img
                src="postgresql-original-wordmark.svg"
                alt="PostgreSQL Relational Database Management System"
                width={75}
                height={75}
                className=""
              />
            </div> */}
          </div>
          <div className="mx-auto rounded-xl text-center md:w-1/3 md:pr-8 lg:pr-20 max-w-md">
            <Image
              src="carlosnina_photo.webp"
              alt="Carlos Nina Photo"
              width={100}
              height={100}
              className="w-full max-w-xs md:max-w-full aspect-square object-cover rounded-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
