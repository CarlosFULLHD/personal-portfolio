import React from "react";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Project 1",
    image: "project1.jpg",
    description: "Description of project 1",
    technologies: ["next-js.svg", "react.svg", "typescript.svg"],
    carouselImages: ["project1-1.jpg", "project1-2.jpg", "project1-3.jpg"],
    githubLink: "https://github.com/username/project1",
    demoLink: "https://project1.demo.com",
  },
  {
    title: "Project 2",
    image: "project2.jpg",
    description: "Description of project 2",
    technologies: ["spring.svg", "java.svg"],
    carouselImages: ["project2-1.jpg", "project2-2.jpg", "project2-3.jpg"],
    githubLink: "https://github.com/username/project2",
    demoLink: "https://project2.demo.com",
  },
  // Add more projects here
];

export const ProjectsSection = () => {
  return (
    <section className="m-0 lg:max-w-3xl">
      <div className="mx-auto max-w-[1024px] p-1 sm:p-2 md:p-4 lg:p-8 rounded-lg">
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Frontend:</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {projects
              .filter((p) => p.technologies.includes("next-js.svg"))
              .map((project, index) => (
                <ProjectCard key={index} {...project} />
              ))}
          </div>
        </div>
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Backend:</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {projects
              .filter((p) => p.technologies.includes("spring.svg"))
              .map((project, index) => (
                <ProjectCard key={index} {...project} />
              ))}
          </div>
        </div>
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">DevOps:</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {projects
              .filter((p) => p.technologies.includes("docker.svg"))
              .map((project, index) => (
                <ProjectCard key={index} {...project} />
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
