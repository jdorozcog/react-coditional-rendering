import React from 'react';
import maleImg from '../img/male.png';
import femaleImg from '../img/female.png';

import './datos.style.css';

const Datos = (props) => {
    return(
        <div className="datos-container"> 
            {props.name} 
            {
                props.grade < 3.0
            ? 
                <span className="failed-grade"> {props.grade} </span>
            :
                <span> {props.grade} </span>
            }

            {
               props.gender === "Male"
            ?
                <span> {props.gender} <img src={maleImg} className="male-img"></img> </span>
            :
                <span> {props.gender} <img src={femaleImg} className="female-img"></img> </span>
            }

        </div>
    );
}
export default Datos;