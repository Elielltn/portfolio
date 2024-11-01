import "./Header.css";
import HeaderLinks from "../HeaderLinks/HeaderLinks";
const Header = () => {
  return (
    <div className="flex header">
      <p className="logo logo-style"> &lt;Eliel Lucas{"/>"}</p>
      <div className="flex links-container">
        <HeaderLinks id="inicio" name="Início"></HeaderLinks>
        <HeaderLinks id="about" name="Sobre mim"></HeaderLinks>
        <HeaderLinks id="projects" name="Projetos"></HeaderLinks>
        <HeaderLinks id="services" name="Servicos"></HeaderLinks>
        <HeaderLinks id="habilities" name="Habilidades"></HeaderLinks>
      </div>
    </div>
  );
};

export default Header;
