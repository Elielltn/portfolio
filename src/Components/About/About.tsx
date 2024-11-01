import "./About.css";
import InfoCards from "../InfoCards/InfoCards";
import smile from "../img/smile.png";
import mail from "../img/mail.png";
import insta from "../img/insta.png";
import phone from "../img/phone.png";
const About = () => {
  return (
    <div className="flex about margin-bottom-lg">
      <div className="text-area-about">
        <h1 className="about-title margin-bottom-sm">Sobre mim</h1>
        <p className="about-para">
          Meu Nome é Eliel Lucas, sou estudante de Ciência da Computação e no
          momento estou no quarto período. Durante esse tempo tenho me
          aprofundado no desenvolvimento web, sempre buscando melhorar no que já
          sei e aprendendo novas tecnologias.
        </p>
      </div>
      <div className="infos flex">
        <InfoCards icon={smile} title="Nome" text="Eliel Lucas"></InfoCards>
        <InfoCards icon={mail} title="E-mail" text="elielltn.dev@gmail.com"></InfoCards>
        <InfoCards icon={insta} title="Instagram" text="Elielltn"></InfoCards>
        <InfoCards icon={phone} title="Telefone" text="(81) 97913-1336"></InfoCards>
      </div>
    </div>
  );
};

export default About;
