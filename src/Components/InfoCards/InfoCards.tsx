import "./InfoCards.css";

const InfoCards = ({ icon, title, text }: any) => {
  return (
    <div className="info-card flex">
      <img src={icon} alt="" />
      <p className="info-card-title">{title}</p>
      <p className="info-card-para">{text}</p>
    </div>
  );
};

export default InfoCards;
