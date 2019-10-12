import React from 'react';
import {Link} from 'react-router-dom';

import '../css-files/nav.css';



export default function Nav(){
    const navStyle={
        color:'white',
        textDecoration:'none'
    }
    return(
        <div>
            <ul className="nav">
                <li>
                    <ul>
                    <Link to='Fahrenheit to Celsius' style={navStyle}>
                    <li>Fahrenheit to Celsius</li>
                    </Link> 
                    <li>Fahrenheit to Kelvin</li>
                    </ul> 
                </li>
                <li>
                    <ul>
                    <Link to='Celsius to Fahrenheit' style={navStyle}>
                    <li>Celsius to Fahrenheit</li>
                    </Link> 
                    <Link to="Celsius to Kelvin" style={navStyle} >
                        <li>Celsius to Kelvin</li>
                    </Link> 
                     
                    </ul>  
                </li>                
                <li>
                    <ul>
                    <Link to='Kelvin to Fahrenheit' style={navStyle}>
                        <li>Kelvin to Fahrenheit</li>
                    </Link>
                    <Link to="Kelvin to Celsius" style={navStyle}>
                        <li>Kelvin to Celsius</li>
                    </Link>  
                    
                    </ul>
                       
                </li>
                   
            </ul>
        </div>
    );
}



