import "./Wrapper.css";
import Header from "../Header/Header";
import Initial from "../Initial/Initial";
import About from "../About/About";
import Projects from "../Projects/Projects";
import Services from "../Services/Services";
const Wrapper = () => {
  return (
    <div className="wrapper">
      <Header></Header>
      <Initial></Initial>
      <About></About>
      <Projects></Projects>
      <Services></Services>
    </div>
  );
};

export default Wrapper;
