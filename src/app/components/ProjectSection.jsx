import React from "react";
import ProjectCard from "./ProjectCard";

const projectsData = [
  {
    id: 1,
    title: "Puppy Bowl Website",
    description: "Project 1 description",
    image: "/Images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: '/',
    previewUrl: '/',
  },
];

export const ProjectSection = () => {
  return (
    <>
      <h2>My Projects</h2>
      <div>
        {projectsData.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
            gitUrl={project.gitUrl}
            previewUrl={project.previewUrl}
          />
        ))}
      </div>
    </>
  );
};
