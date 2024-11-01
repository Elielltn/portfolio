import "./ProjectCard.css";
import Button from "../Button/Button";

const ProjectCard = ({ nome, tecs }: any) => {
  return (
    <div className="project-card flex">
      <div className="img-placeholder flex">
        <p>Imagem do projeto</p>
      </div>
      <div className="project-details flex">
        <p className="project-name">{nome}</p>
        <p className="project-tecnologies">{ tecs }</p>
      </div>
      <div className="card-buttons flex">
        <Button text="Acessar o projeto" type="btn"></Button>
        <Button text='Acessar o repositório' type="btn-2" ></Button>
      </div>
    </div>
  );
};

export default ProjectCard;
