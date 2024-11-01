import "./Projects.css"
import ProjectCard from "../ProjectCard/ProjectCard";
const Projects = () => {
  return (
    <div className="projects flex">
      <h2 className="projects-title margin-bottom-sm">Projetos</h2>
      <div className="projects-cards grid">
        <ProjectCard nome="Nome do projeto" tecs="React"></ProjectCard>
        <ProjectCard nome="Nome do projeto" tecs="React"></ProjectCard>
        <ProjectCard nome="Nome do projeto" tecs="React"></ProjectCard>
        <ProjectCard nome="Nome do projeto" tecs="React"></ProjectCard>
      </div>
    </div>
  );
}

export default Projects;