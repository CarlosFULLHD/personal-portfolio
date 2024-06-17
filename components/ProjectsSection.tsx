import React from "react";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Thesis Management System",
    image: "https://d1kdkr2pswehq6.cloudfront.net/encuentra_proposito.jpg",
    shortDescription: `The Thesis Management System is designed to support both students and faculty throughout the thesis process.`,
    fullDescription: `The Thesis Management System is designed to support both students and faculty throughout the thesis process. It includes a range of features to facilitate information dissemination, tutor management, project submissions, and progress tracking. The system ensures secure access for users and provides comprehensive tools for managing thesis-related activities.

    Objective:
    The Thesis Management System aims to streamline and enhance the management of the thesis process for students and faculty. It provides essential tools for communication, document management, and progress tracking to ensure a smooth and efficient thesis experience.`,
    keyPoints: [
      "News and Announcements: Provides essential information about the thesis process and official documentation, and allows creating and publishing news with any start and end date to inform students about changes or recommendations.",
      "Library Search Tool: Simple interface to search thesis projects within the department by keywords, authors, topics, with a usage tutorial.",
      "Tutor Management: Provides information on available tutors, including their experience and contact details to help students choose a tutor.",
      "Teacher Registration Management: Verifies teacher access through email and two-factor authentication to prevent identity theft.",
      "Student Registration Management: Students can fill out a registration form reviewed by a teacher to validate if they can take the thesis course. Students can submit project proposals for review and access.",
      "Dropout and Withdrawal Management: Students can withdraw from the course, and the coordinator can approve or reject withdrawal requests.",
      "Thesis Proposal Review: Provides interfaces for submitting and reviewing thesis proposals, facilitating feedback between the department council and students.",
      "Tutor and Reviewer Assignment: Helps the thesis coordinator assign tutors and reviewers to students.",
      "Task Management and Progress Tracking: Enables virtual or in-person meetings between students and tutors, task assignments, progress tracking, and feedback with grades.",
      "Final Document Generation: Facilitates the generation of the final document for formal defense.",
      "User Management: Allows managing users, changing roles, and deregistering students.",
    ],
    technologies: [
      "next-js.svg",
      "react-svgrepo-com.svg",
      "typescript-official-svgrepo-com.svg",
      "tailwind-svgrepo-com.svg",
      "spring.svg",
      "postgresql-original-wordmark.svg",
    ],
    carouselImages: [
      "https://d1kdkr2pswehq6.cloudfront.net/encuentra_proposito.jpg",
      "https://d1kdkr2pswehq6.cloudfront.net/encuentra_proposito.jpg",
      "https://d1kdkr2pswehq6.cloudfront.net/calnewport-img.webp",
    ],
    githubLink: "https://github.com/username/project1",
    demoLink: "https://project1.demo.com",
  },
  {
    title: "Project 2",
    image: "project2.jpg",
    shortDescription: "Description of project 2",
    fullDescription: "Full description of project 2",
    keyPoints: ["Feature 1", "Feature 2", "Feature 3"],
    technologies: ["spring.svg", "java.svg"],
    carouselImages: ["project2-1.jpg", "project2-2.jpg", "project2-3.jpg"],
    githubLink: "https://github.com/username/project2",
    demoLink: "https://project2.demo.com",
  },
  // Add more projects here
];

export const ProjectsSection = () => {
  return (
    <section className="m-0  self-center mt-8 ">
      <div className="mx-auto p-1 sm:p-2 md:p-4 lg:p-8 rounded-lg">
        <div className="mb-8">
          <h2 className="text-4xl font-bold mb-4 text-yellow-dark text-center">
            Key Projects:
          </h2>
          <div className="grid grid-cols-1 gap-4 items-center lg:grid-cols-2 max-w-[1200px] mx-auto">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Other Projects:</h2>
          <div className="grid grid-cols-1 gap-4 items-center lg:grid-cols-2 max-w-[1200px] mx-auto">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
