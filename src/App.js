import React from 'react';
import AdSense from 'react-adsense';
import Nav from '../src/components/nav';
import ConverterFahrenheit from '../src/components/converterFahrenheit';
import FormulaFahrenheit from './components/text-formula-Fahrenheit';
import ConverterCelsius from '../src/components/converterCelsius';
import FormulaCelsius from '../src/components/text-formula-Celsius';
import ConverterKelvintoF from '../src/components/converterKelvintoF';
import FormulaKelvintoFahrenheit from '../src/components/text-formula-KelvintoF';
import ConverterKelvintoC from '../src/components/converterKelvintoC';
import FormulaKelvintoCelsius from '../src/components/text-formula-KelvintoC';
import ConverterCelsiustoK from '../src/components/converterCelsiustoK';
import FormulaCelsiustoKelvin from '../src/components/text-formula-CelsiustoK';
import Footer from '../src/components/footer';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';




function App() {
  return (
    <Router>
      <div>
      <AdSense.Google 
      client=''
      slot=''
      />
      <Nav />
      <Route path="/Fahrenheit to Celsius" component={ConverterFahrenheit} />
      <Route path="/Celsius to Fahrenheit" component={ConverterCelsius} />
      <Route path="/Kelvin to Fahrenheit" component={ConverterKelvintoF} />
      <Route path="/Kelvin to Celsius" component={ConverterKelvintoC} />
      <Route path="/Celsius to Kelvin" component={ConverterCelsiustoK} />
      <Route path="/Fahrenheit to Celsius" component={FormulaFahrenheit}/>
      <Route path="/Celsius to Fahrenheit" component={FormulaCelsius} />
      <Route path="/Kelvin to Fahrenheit" component={FormulaKelvintoFahrenheit} />
      <Route path="/Kelvin to Celsius" component={FormulaKelvintoCelsius} />
      <Route path="/Celsius to Kelvin" component={FormulaCelsiustoKelvin}/>
      <Footer />
      </div>
    </Router>
    
  );
}

export default App;
