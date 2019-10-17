import React from 'react';
import ConverterCelsiustoK from '../components/converterCelsiustoK';
import FormulaCelsiustoKelvin from '../components/text-formula-CelsiustoK';

export default function DisplayCelsiustoKelvin(){
   return(
        <div>
            <ConverterCelsiustoK />
            <FormulaCelsiustoKelvin />
        </div>
   );
}