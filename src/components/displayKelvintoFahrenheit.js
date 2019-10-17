import React from 'react';
import ConverterKelvintoF from '../components/converterKelvintoF';
import FormulaKelvintoFahrenheit from '../components/text-formula-KelvintoF';


export default function(){
    return(
        <div>
            <ConverterKelvintoF />
            <FormulaKelvintoFahrenheit />
        </div>
    );
}