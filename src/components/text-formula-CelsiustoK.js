import React from 'react';

import '../css-files/text-formula.css';

export default function FormulaCelsiustoKelvin() {
return(
    <section className="text-formula-container">
        <h1 classNamme="text-formula-title">Definition of Celsius</h1>
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
        <h1 classNamme="text-formula-title">Celsius to Kelvin formula</h1>
        
        <p className="text-format">Although initially defined by the freezing point of water (and later the melting point of ice), 
        the Celsius scale is now officially a derived scale, defined in relation to the Kelvin temperature scale.<br/>
        <br/>
        Zero on the Celsius scale (0°C) is now defined as the equivalent to 273.15K, with a temperature difference of 1 deg C 
        equivalent to a difference of 1K, meaning the unit size in each scale is the same. This means that 100°C, 
        previously defined as the boiling point of water, is now defined as the equivalent to 373.15K.
        </p>
        <h4>How to convert Celsius to Kelvin</h4>
        <p className="text-format">The temperature T in Kelvin (K) is equal to the temperature T 
        in degrees Celsius (°C) plus 273.15:</p>
        <h3>
        T(K) = T(°C) + 273.15
        </h3>
        <h3 className="text-formula-title">Example</h3>
        <p className="text-formula-title">Convert 20 degrees Celsius to Kelvin:</p>
        <h3>T(K) = 20°C + 273.15 = 293.15 K</h3>
    </section>
);
}