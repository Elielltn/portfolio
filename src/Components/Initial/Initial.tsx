import "./Initial.css";
import Button from "../Button/Button";
import logo from "./image.png";
const Initial = () => {
  return (
    <div className="flex initial">
      <div className="text-area-initial">
        <div className="text-area-texts">
          <div className="text-area-apresentation">
            <p className="apresentation-small">Olá, eu sou</p>
            <p className="apresentation-name">Eliel Lucas</p>
          </div>
          <p className="text-area-occupation">Desenvolvedor Frontend</p>
        </div>
        <Button text="Baixar currículo" type="btn"></Button>
      </div>

      <img src={logo} alt="" className="initial-img" />
    </div>
  );
};

export default Initial;
