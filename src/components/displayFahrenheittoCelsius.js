import React from 'react';
import ConverterFahrenheit from '../components/converterFahrenheit';
import FormulaFahrenheit from '../components/text-formula-Fahrenheit';


export default function DisplayFtoC(){
    return(
        <div>
            <ConverterFahrenheit />
            <FormulaFahrenheit />
        </div>
    )    
}


