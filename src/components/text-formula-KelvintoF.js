import React from 'react';

import '../css-files/text-formula.css';

export default function FormulaKelvintoFahrenheit() {
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
        <h1 classNamme="text-formula-title">Kelvin to Fahrenheit formula</h1>
        
        <p className="text-format">The Fahrenheit temperature range is based on setting the freezing point of water at 32 degrees, 
        and boiling to 212 degrees. This means that boiling and freezing point are 180 degrees apart. Absolute zero is defined as -459.67°F.
        </p>
        <h4>How to convert Kelvin to Fahrenheit</h4>
        <p className="text-format">The temperature T in degrees Fahrenheit (°F) is equal to the temperature T 
            in Kelvin (K) <br/> times 9/5, minus 459.67:</p>
        <h3>
        T(°F) = T(K) × 9/5 - 459.67
        </h3>
        <h3 className="text-formula-title">Example</h3>
        <p className="text-formula-title">Convert 300 Kelvin to degrees Fahrenheit:</p>
        <h3>T(°F) = 300K × 9/5 - 459.67 = 80.33 °F</h3>
    </section>
);
}