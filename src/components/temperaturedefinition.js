import React from 'react';

import '../css-files/text-formula.css';

export default function TemperatureDefinition(){
    return(
        <section className="text-formula-container">
            <h1 classNamme="text-formula-title">Temperature Definition in Science</h1>
            <h3>Can You Define Temperature?</h3>
            <p className="text-format">
            Temperature is the property of matter which reflects the quantity of energy of 
            motion of the component particles. It is a comparative measure of how hot or cold 
            a material is. The coldest theoretical temperature is called absolute zero. It is 
            the temperature where the thermal motion of particles is at its minimum (not the 
            same as motionless). Absolute zero is 0 K on the Kelvin scale, −273.15 C on the 
            Celsius scale, and −459.67 F on the Fahrenheit scale.
            </p>
            <p className="text-format">
            The instrument used to measure temperature is a thermometer. The International 
            System of Units (SI) unit of temperature is the Kelvin (K), although other temperature
             scales are more commonly used for everyday situations.
            </p>
            <p className="text-format">
            Temperature may be described using the Zeroth Law of Thermodynamics and the kinetic theory of gases. 
            </p>
            <h3 classNamme="text-formula-title">Temperature Scales</h3>
            <p className="text-format">
            There are several scales used to measure temperature. Three of the most common are Kelvin,
            Celsius, and Fahrenheit. Temperature scales may be relative or absolute. A relative scale is 
            based on the kinetic behavior relative to a certain material. Relative scales are degree scales.
            Both the Celsius and Fahrenheit scales are relative scales based on the freezing point (or triple point)
            of water and its boiling point, but the size of their degrees are different from each other. The Kelvin
            scale is an absolute scale, which has no degrees. The Kelvin scale is based on thermodynamics and 
            not on the property of any specific material.  
            </p>
        </section>
    );
}
