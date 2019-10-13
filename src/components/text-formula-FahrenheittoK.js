import React from 'react';

import '../css-files/text-formula.css';

export default function FormulaCelsiustoKelvin() {
return(
    <section className="text-formula-container">
        <h1 classNamme="text-formula-title">Definition of Kelvin</h1>
        <div className="text-format">
        <p>
        The <a>Kelvin</a> is defined by fixing the numerical value of the Boltzmann constant k to 1.380 649×10−23 J⋅K−1. 
        This unit is equal to kg⋅m2⋅s−2⋅K−1, where the kilogram, metre and second are defined in terms of the Planck constant, 
        the speed of light, and the duration of the caesium-133 ground-state hyperfine transition. Thus, this definition 
        depends only on universal constants, and not on any physical artifacts as practiced previously, such as the IPK, whose mass diverged over time from the original value.<br/>
        <br/>
        The Kelvin scale fulfills Thomson's requirements as an absolute thermodynamic temperature scale. It uses absolute zero as its null point.<br/>
        <br/>
        Unlike the degree Fahrenheit and degree Celsius, the Kelvin is not referred to or written as a degree. 
        The kelvin is the primary unit of temperature measurement in the physical sciences, but is often used in conjunction with the degree Celsius, which has the same magnitude.
        </p>
        </div>
        <h1 classNamme="text-formula-title">Fahrenheit to Kelvin formula</h1>
        
        <p className="text-format">Fahrenheit and Kelvin are two common temperature scales. The Fahrenheit scale is used in the United States, 
        while Kelvin is an absolute temperature scale, used worldwide for scientific calculations. While you might think this conversion wouldn't 
        occur much, it turns out there is a lot of scientific and engineering equipment that uses the Fahrenheit scale.
        </p>
        <h4>How to convert Fahrenheit to Kelvin</h4>
        <p className="text-format">The temperature T in Kelvin (K) is equal to the temperature T 
        in degrees Fahrenheit (°F) plus 459.67, times 5/9:</p>
        <h3>
        T(K) = (T(°F) + 459.67) × 5/9
        </h3>
        <h3 className="text-formula-title">Example</h3>
        <p className="text-formula-title">Convert 60 degrees Fahrenheit to degrees Kelvin:</p>
        <h3>T(K) = (60°F + 459.67) × 5/9 = 288.71 K</h3>
    </section>
);
}