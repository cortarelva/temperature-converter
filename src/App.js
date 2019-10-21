import React from 'react';
import AdSense from 'react-adsense';
import Nav from '../src/components/nav';
import DisplayFahrenheittoCelsius from '../src/components/displayFahrenheittoCelsius';
import DisplayCelsiustoFahrenheit from '../src/components/displayCelsiustoFahrenheit';
import DisplayKelvintoFahrenheit from '../src/components/displayKelvintoFahrenheit';
import DisplayFahrenheittoKelvin from '../src/components/displayFahrenheittoKelvin';
import DisplayCelsiustoKelvin from '../src/components/displayCelsiustoKelvin';
import DisplayKelvintoCelsius from '../src/components/displayKelvintoCelsius';
import ButtonLinks from '../src/components/ButtonLinks';
import Footer from '../src/components/footer';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';




export default function App() {
  return (
    <Router>
      <div>
      <AdSense.Google 
      client=''
      slot=''
      />
      <Nav />
      <Route path="/Fahrenheit to Celsius" component={DisplayFahrenheittoCelsius} />
      <Route path="/Fahrenheit to Kelvin" component={DisplayFahrenheittoKelvin} />
      <Route path="/Celsius to Fahrenheit" component={DisplayCelsiustoFahrenheit} />
      <Route path="/Kelvin to Fahrenheit" component={DisplayKelvintoFahrenheit} />
      <Route path="/Celsius to Kelvin" component={DisplayCelsiustoKelvin} />
      <Route path="/Kelvin to Celsius" component={DisplayKelvintoCelsius} />
      <ButtonLinks />
      <Footer />
      </div>
    </Router>   
  );
}


