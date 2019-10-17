import React from 'react';


import '../css-files/converter.css';



class ConverterInput extends React.Component{
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
            <h1 className="form-title">Fahrenheit to Celsius</h1>
            <div className="input-container">
                <p className="input-label">Fahrenheit:</p>
                <input className="input" type="number" onChange={this.changeInputValue} placeholder="0"></input>
            </div>
            <h3 className="output-label">Celsius: {Math.round((this.state.value -32) / 1.8)} ºC</h3>
        </form>
    );
}
}
export default ConverterInput;