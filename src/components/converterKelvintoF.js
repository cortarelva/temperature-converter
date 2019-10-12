import React from 'react';

import '../css-files/converter.css';




export default class ConverterInput extends React.Component{
    constructor(props){
        super(props)
        this.state = {value:" "}
    }
    changeInputValue = event =>{
        this.setState({value: event.target.value})
    }
    render(){
        return(
            <form className="form-container">
            <h1 className="form-title">Kelvin to Fahrenheit</h1>
            <div className="input-container">
                <p className="input-label">Kelvin:</p>
                <input className="input" type="number" onChange={this.changeInputValue} placeholder="0"></input>
            </div>
            <h3 className="output-label">Fahrenheit: {Math.round((this.state.value -273.15) * 1.8) +32} ºF</h3>
        </form>
        );
    }
}
