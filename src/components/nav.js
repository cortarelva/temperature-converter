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
                <Link to='/Fahrenheit to Celsius' style={navStyle}>
                <li>Fahrenheit to Celsius</li>
                </Link>
                <Link to='Celsius to Fahrenheit' style={navStyle}>
                <li>Celsius to Fahrenheit</li>
                </Link>
                
            </ul>
        </div>
    );
}



