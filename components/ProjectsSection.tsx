import React from "react";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Thesis Management System",
    image: "",
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
      "https://skillicons.dev/icons?i=nextjs",
      "https://skillicons.dev/icons?i=react",
      "https://skillicons.dev/icons?i=typescript",
      "https://skillicons.dev/icons?i=tailwind",
      "https://skillicons.dev/icons?i=spring",
      "https://skillicons.dev/icons?i=postgresql",
    ],
    carouselImages: ["", "", ""],
    githubLink: "https://github.com/CarlosFULLHD/thesis_management_system",
    demoLink: "",
  },

  {
    title: "Feria del Empleo UCB",
    image:
      "https://github.com/CarlosFULLHD/JobFairPlatform/raw/main/imgs/image.png",
    shortDescription: `The Feria del Empleo UCB project is designed to support students at Universidad Católica Boliviana (UCB) in their transition from university to the workforce by connecting them with potential employers through a virtual job fair platform.`,
    fullDescription: `The Feria del Empleo UCB project is designed to support students at Universidad Católica Boliviana (UCB) in their transition from university to the workforce by connecting them with potential employers through a virtual job fair platform. The platform allows institutions to present themselves and interact with students via video content, social media links, and Zoom meetings.

    Objective:
    The Feria del Empleo UCB aims to facilitate students' transition from university to the workforce by providing a platform for interaction with potential employers.`,
    keyPoints: [
      "View Institutions: Students can browse all participating institutions organized by sectors.",
      "Institution Details: Students can view detailed information about each institution, including videos, social media links, and other relevant information.",
      "Zoom Meeting Registration: Students can register for Zoom meetings hosted by institutions, subject to availability and capacity limits.",
      "Event Calendar: Students can view a calendar of scheduled events and Zoom meeting links.",
      "Manage Institutions: Administrators can create and manage institution profiles, including descriptions, videos, images (with drag and drop), and social media links.",
      "Manage Events: Administrators can create and schedule Zoom meetings, set capacity limits, and manage event details.",
    ],
    technologies: [
      "https://skillicons.dev/icons?i=vue",
      "https://cdn.vuetifyjs.com/docs/images/brand-kit/v-logo-atom.svg",
      "https://skillicons.dev/icons?i=express",
      "https://skillicons.dev/icons?i=mysql",
    ],
    carouselImages: [
      "https://github.com/CarlosFULLHD/JobFairPlatform/raw/main/imgs/image-2.png",
      "https://github.com/CarlosFULLHD/JobFairPlatform/raw/main/imgs/image-1.png",
      "https://github.com/CarlosFULLHD/JobFairPlatform/raw/main/imgs/image-12.png",
      "https://github.com/CarlosFULLHD/JobFairPlatform/raw/main/imgs/image-14.png",
      "https://github.com/CarlosFULLHD/JobFairPlatform/raw/main/imgs/image-3.png",
      "https://github.com/CarlosFULLHD/JobFairPlatform/raw/main/imgs/image-5.png",
      "https://github.com/CarlosFULLHD/JobFairPlatform/raw/main/imgs/image-6.png",
      "https://github.com/CarlosFULLHD/JobFairPlatform/raw/main/imgs/image-7.png",
      "https://github.com/CarlosFULLHD/JobFairPlatform/raw/main/imgs/image-8.png",
      "https://github.com/CarlosFULLHD/JobFairPlatform/raw/main/imgs/image-9.png",
      "https://github.com/CarlosFULLHD/JobFairPlatform/raw/main/imgs/image-10.png",
      "https://github.com/CarlosFULLHD/JobFairPlatform/raw/main/imgs/image-11.png",
      "https://github.com/CarlosFULLHD/JobFairPlatform/raw/main/imgs/image-12.png",
      "https://github.com/CarlosFULLHD/JobFairPlatform/raw/main/imgs/image-13.png",
    ],
    githubLink: "https://github.com/CarlosFULLHD/JobFairPlatform",
    demoLink: "https://jobfair.demo.com",
  },
  {
    title: "SmartPark - IoT Garage System",
    image:
      "https://github.com/CarlosFULLHD/iot_garaje_inteligente/raw/main/readme-imgs/image.png",
    shortDescription:
      "An intelligent garage system utilizing IoT for real-time management and monitoring of parking spaces.",
    fullDescription: `SmartPark is an intelligent garage system that optimizes and automates real-time parking space management to enhance efficiency and security for users while providing statistical data for the university.
  
    Objective:
    Optimize and automate real-time parking space management to enhance efficiency and security for users while providing statistical data for the university.`,
    keyPoints: [
      "Complete and Automated Integration: Uses modern technologies like Raspberry Pi Pico W, Flutter, and Spring Boot.",
      "Flexible Authentication Methods: Supports code and license plate recognition for authentication.",
      "Intuitive Mobile Application: Provides a user-friendly interface for managing and monitoring parking spaces.",
      "Advanced Security Measures: Ensures secure access and management of parking spaces.",
      "Real-Time Monitoring: Offers continuous monitoring and updates about parking space availability.",
      "User-Friendly Interface: Facilitates easy interaction for users through a mobile app.",
    ],
    technologies: [
      "https://skillicons.dev/icons?i=spring",
      "https://skillicons.dev/icons?i=flutter",
      "https://skillicons.dev/icons?i=postgresql",
      "https://skillicons.dev/icons?i=raspberrypi",
      "https://skillicons.dev/icons?i=python",
    ],
    carouselImages: [
      "https://github.com/CarlosFULLHD/iot_garaje_inteligente/raw/main/readme-imgs/image.png",
      "https://github.com/CarlosFULLHD/iot_garaje_inteligente/raw/main/readme-imgs/DB.png",
      "https://github.com/CarlosFULLHD/iot_garaje_inteligente/raw/main/readme-imgs/image-1.png",
      "https://github.com/CarlosFULLHD/iot_garaje_inteligente/raw/main/readme-imgs/image-13.png",
      "https://github.com/CarlosFULLHD/iot_garaje_inteligente/raw/main/readme-imgs/image-14.png",
      "https://github.com/CarlosFULLHD/iot_garaje_inteligente/raw/main/readme-imgs/image-2.png",
      "https://github.com/CarlosFULLHD/iot_garaje_inteligente/raw/main/readme-imgs/image-15.png",
      "https://github.com/CarlosFULLHD/iot_garaje_inteligente/raw/main/readme-imgs/image-3.png",
      "https://github.com/CarlosFULLHD/iot_garaje_inteligente/raw/main/readme-imgs/image-4.png",
      "https://github.com/CarlosFULLHD/iot_garaje_inteligente/raw/main/readme-imgs/image-5.png",
      "https://github.com/CarlosFULLHD/iot_garaje_inteligente/raw/main/readme-imgs/image-6.png",
      "https://github.com/CarlosFULLHD/iot_garaje_inteligente/raw/main/readme-imgs/image-10.png",
      "https://github.com/CarlosFULLHD/iot_garaje_inteligente/raw/main/readme-imgs/image-11.png",
      "https://github.com/CarlosFULLHD/iot_garaje_inteligente/raw/main/readme-imgs/image-12.png",
      "https://github.com/CarlosFULLHD/iot_garaje_inteligente/raw/main/readme-imgs/image-16.png",
      "https://github.com/CarlosFULLHD/iot_garaje_inteligente/raw/main/readme-imgs/image-17.png",
      "https://github.com/CarlosFULLHD/iot_garaje_inteligente/raw/main/readme-imgs/image-18.png",
      "https://github.com/CarlosFULLHD/iot_garaje_inteligente/raw/main/readme-imgs/image-9.png",
      "https://github.com/CarlosFULLHD/iot_garaje_inteligente/raw/main/readme-imgs/image-10.png",
    ],
    githubLink: "https://github.com/CarlosFULLHD/iot_garaje_inteligente",
    demoLink: "https://smartpark.demo.com",
  },
];

export const ProjectsSection = () => {
  return (
    <section className="m-0  self-center mt-8" id="projects">
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

        {/* <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Other Projects:</h2>
          <div className="grid grid-cols-1 gap-4 items-center lg:grid-cols-2 max-w-[1200px] mx-auto">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default ProjectsSection;
