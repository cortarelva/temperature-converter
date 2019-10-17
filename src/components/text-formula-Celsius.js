import React from 'react';

import '../css-files/text-formula.css';

export default function FormulaCelsius() {
return(
    <section className="text-formula-container">
        <h1 classNamme="text-formula-title">Definition of Fahrenheit and Celsius</h1>
        <div className="text-format">
        <p>
        The <a>Celsius</a> scale is nowadays set in such a way that Zero degrees C is the temperature at which ice melts 
        (note : not the temperature at which it freezes, which is different!) . At the other end of the scale, 100 degrees Celsius is the boiling point of water.<br/>
        The scientific definition of Celsius is now defined against degrees Kelvin. Zero degrees Celsius is 273.15K. One degree Celsius is equal to one Kelvin, 
        so we can say that the boiling point of water is equal to 273.15 + 100 = 373.15 Kelvin.<br/>
        <br/>
        In the <a>Fahrenheit</a> scale, water freezes at 32 degrees, and boils at 212 degrees.<br/>
        Boiling and freezing point are therefore 180 degrees apart. Normal body temperature is considered to be 98.6 °F (in real-life it fluctuates around this value). 
        Absolute zero is defined as -459.67°F.
        </p>
        </div>
        <h1 classNamme="text-formula-title">Celsius to Fahrenheit formula</h1>
        
        <p className="text-format">The Fahrenheit temperature range is based on setting the freezing point of water at 32 degrees, 
        and boiling to 212 degrees. This means that boiling and freezing point are 180 degrees apart. Absolute zero is defined as -459.67°F.
        </p>
        <h4>How to convert Celsius to Fahrenheit</h4>
        <p>The temperature T in degrees Fahrenheit (°F) is equal to the temperature T
             in degrees Celsius (°C) times 9/5 plus 32:</p>
        <h3>
        T(°F) = T(°C) × 9/5 + 32<br/>
        or<br/>
        T(°F) = T(°C) × 1.8 + 32
        </h3>
        <h3 className="text-formula-title">Example</h3>
        <p className="text-formula-title">Convert 20 degrees Celsius to degrees Fahrenheit:</p>
        <h3>T(°F) = 20°C × 9/5 + 32 = 68 °F</h3>

        <h4>Curiosity</h4>
        <p>The Fahrenheit scale meets with the Celsius scale at exactly -40 Deg.</p>
        <h3>-40ºF = -40ºC</h3>
        <p>A temperature difference of 1 deg C is the equivalent of a temperature difference 1.8°F.</p>
    </section>
    );
}
