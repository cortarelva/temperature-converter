import React from 'react';
import ConverterKelvintoC from '../components/converterKelvintoC';
import FormulaKelvintoC from '../components/text-formula-KelvintoC';

export default function DisplayKtoC(){
    return(
        <div>
            <ConverterKelvintoC />
            <FormulaKelvintoC />
        </div>  
    );
}