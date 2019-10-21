import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import '../css-files/buttonLinks.css';

export default function BtnLinks(){
    const titleStyle ={
        fontSize: 30
    }
    return(
       <section>
           <div className="btn-container">
                <h1 style={titleStyle}>Select Converter</h1>
                <Link to='Fahrenheit to Celsius'>
                    <div className="btn">Fahrenheit to Celsius</div>
                </Link>
                <Link to='Celsius to Fahrenheit'>
                    <div className="btn">Celsius to Fahrenheit</div>
                </Link>
                <Link to='Kelvin to Fahrenheit'>
                    <div className="btn">Kelvin to Fahrenheit</div>
                </Link>
                <Link to="Fahrenheit to kelvin">
                    <div className="btn">Fahrenheit to Kelvin</div>
                </Link>
                <Link to="Celsius to Kelvin">
                    <div className="btn">Celsius to Kelvin</div>
                </Link>
                <Link to="Kelvin to Celsius">
                    <div className="btn">Kelvin to Celsius</div>
                </Link>
                
           </div>
       </section>
    );
}