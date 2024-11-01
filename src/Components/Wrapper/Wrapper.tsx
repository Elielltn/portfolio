import "./Wrapper.css";
import Header from "../Header/Header";
import Initial from "../Initial/Initial";
import About from "../About/About";
import Projects from "../Projects/Projects";
const Wrapper = () => {
  return (
    <div className="wrapper">
      <Header></Header>
      <Initial></Initial>
      <About></About>
      <Projects></Projects>
    </div>
  );
};

export default Wrapper;
