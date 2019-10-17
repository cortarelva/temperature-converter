import React from 'react';
import ConverterCelsius from '../components/converterCelsius';
import FormulaCelsius from '../components/text-formula-Celsius';


export default function DisplayCtof(){
    return(
        <div>
            <ConverterCelsius />
            <FormulaCelsius />
        </div>
    );
}
