import React from 'react';
import {Link, NavLink} from 'react-router-dom';

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
                    <NavLink to='Fahrenheit to Celsius' activeClassName="chosen" style={navStyle}>
                    <li>Fahrenheit to Celsius</li>
                    </NavLink>
                    <NavLink to="Fahrenheit to kelvin" activeClassName="chosen" style={navStyle}>
                    <li>Fahrenheit to Kelvin</li>
                    </NavLink> 
                    
                    </ul> 
                </li>
                <li>
                    <ul>
                    <NavLink to='Celsius to Fahrenheit' activeClassName="chosen" style={navStyle}>
                    <li>Celsius to Fahrenheit</li>
                    </NavLink> 
                    <NavLink to="Celsius to Kelvin" activeClassName="chosen" style={navStyle} >
                        <li>Celsius to Kelvin</li>
                    </NavLink> 
                     
                    </ul>  
                </li>                
                <li>
                    <ul>
                    <NavLink to='Kelvin to Fahrenheit' activeClassName="chosen" style={navStyle}>
                        <li>Kelvin to Fahrenheit</li>
                    </NavLink>
                    <NavLink to="Kelvin to Celsius" activeClassName="chosen" style={navStyle}>
                        <NavLink to="Kelvin to Celsius" activeClassName="chosen" style={navStyle}>
                        <li>Kelvin to Celsius</li>
                        </NavLink>
                        
                    </NavLink>  
                    
                    </ul>
                       
                </li>
                   
            </ul>
        </div>
    );
}



