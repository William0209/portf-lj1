import "./portfolio.css";
import Projects from "./Projects";
import ProjectsCategories from "./ProjectsCategories";
import data from "./data";
import { useState } from "react";

const Portfolio = () => {
  const [projects, setProjects] =
    useState(data);

  const categories = data.map(
    (item) => item.category
  );
  const uniqueCategories = [
    "all",
    ...new Set(categories),
  ];

  const filterProjectsHandler = (
    category
  ) => {
    if (category === "all") {
      setProjects(data);
      return;
    }

    const filterProjects = data.filter(
      (project) =>
        project.category === category
    );
    setProjects(filterProjects);
  };

  return (
    <section id="portfolio">
      <h2>
        Stay tuned for upcoming projects
      </h2>
      <p>
        Explore some of the projects
        I've recently completed. Please
        note that the projects below are
        placeholders and will soon be
        replaced with real examples. Use
        the buttons to navigate through
        different categories.
      </p>
      <div className="container portfolio__container">
        <ProjectsCategories
          categories={uniqueCategories}
          onFilterProjects={
            filterProjectsHandler
          }
        />
        <Projects projects={projects} />
      </div>
    </section>
  );
};

export default Portfolio;
