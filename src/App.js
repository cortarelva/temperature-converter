import React from 'react';
import AdSense from 'react-adsense';
import Nav from '../src/components/nav';
import ConverterFahrenheit from '../src/components/converterFahrenheit';
import FormulaFahrenheit from './components/text-formula-Fahrenheit';
import ConverterCelsius from '../src/components/converterCelsius';
import FormulaCelsius from '../src/components/text-formula-Celsius';
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
      <Route path="/Fahrenheit to Celsius" component={FormulaFahrenheit}/>
      <Route path="/Celsius to Fahrenheit" component={FormulaCelsius} />
      <Footer />
      </div>
    </Router>
    
  );
}

export default App;
