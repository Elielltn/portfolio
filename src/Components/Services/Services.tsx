import './Services.css'
import Service from '../Service/Service';
import operators from './img/operators.png'
import figma from "./img/figma.png";
import smartphone from "./img/smartphone.png";

const Services = () =>{
  return (
    <div className='services grid'>
        <Service src={operators}></Service>
    </div>
  )
}

export default Services;