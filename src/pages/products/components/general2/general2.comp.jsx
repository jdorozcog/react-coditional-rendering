import React from 'react';
import Course from '../course/course.comp';
import Datos from '../datos/datos.comp';

import './general2.style.css';

const General2 = () =>{
    return(
        <div className="general2-container">
            
            <Course nameCourse="Programming"/>
            <div className="other">Name   Grade   Gender</div>
                <Datos name= "Julian Orozco" grade= {3.5} gender="Male"/>
                <Datos name= "Camilo Torres" grade= {5.0} gender="Male"/>
                <Datos name= "Ana Garcia" grade= {2.5} gender= "Female"/>
                <Datos name= "Mariana Lopez" grade= {1.5} gender= "Female"/>
                <Datos name= "Martín Osorio" grade= {4.0} gender= "Male"/>  
            <Course nameCourse="Networks"/>
            <div className="other">Name Grade Gender</div>
                <Datos name= "Alejandro Gallego" grade= {5.0} gender= "Male"/>
                <Datos name= "Diana Franco" grade= {2.4} gender= "Female"/>
                <Datos name= "Valentin Arias" grade= {3.4} gender= "Male"/>
                <Datos name= "Natalia Ramirez" grade= {5.0} gender= "Female"/>
                <Datos name= "Isabella Toro" grade= {2.5} gender= "Female"/>  
            <Course nameCourse="Operating systems"/>
            <div className="other">Name Grade Gender</div>
                <Datos name= "Freddy Rios" grade= {4.0} gender= "Male"/>
                <Datos name= "Vanessa Giraldo" grade= {5.0} gender= "Female"/>
                <Datos name= "Jessica Diaz" grade= {1.5} gender= "Female"/>
                <Datos name= "Felipe Sanchez" grade= {2.5} gender= "Male"/>
                <Datos name= "German Arenas" grade= {4.0} gender= "Male"/> 
            <Course nameCourse="English"/>
            <div className="other">Name Grade Gender</div>
                <Datos name= "Viviana Moreno" grade= {4.4} gender= "Female"/>
                <Datos name= "Jeison Ravagli" grade= {3.2} gender= "Male"/>
                <Datos name= "Cesar Arias" grade= {1.8} gender= "Male"/>
                <Datos name= "Fernanda Garcia" grade= {2.9} gender= "Female"/>
                <Datos name= "Oscar Garcia" grade= {5.0} gender= "Male"/> 
        </div>
    )
}
export default General2;