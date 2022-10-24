import React  from "react";
import './components.css';

//Temperature conversion
function toCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}

function tryConvert(temperature, converter) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return '';
  }
  const output = converter(input); //Convert here is a fucntion that takes 'input' as a parameter
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

//Indicator 
function BoilingVerdict(props) {
  if (props.celsius >= 100) {
    return <p>The water would boil.</p>;  
  }
  return <p>The water would not boil.</p>;
}


//Component for taking the temperatures
const scaleNames = {  
  c: 'Celsius',  
  f: 'Fahrenheit'
}; 

class TemperatureInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onTemperatureChange(e.target.value);
  }

  render() {
    const temperature = this.props.temperature;
    const scale = this.props.scale;    
    return (
      <fieldset>
        <legend>Enter temperature in {scaleNames[scale]}:</legend>        
          <input value={temperature} onChange={this.handleChange} />
      </fieldset>
    );
  }
}

//Calculator (main component)
class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.handleCelChange = this.handleCelChange.bind(this);
    this.handleFahChange = this.handleFahChange.bind(this);
    this.state = {temperature: '', scale: 'c'};
  }

  handleCelChange(temperature) {
    this.setState({scale: 'c', temperature});
  }

  handleFahChange(temperature) {
    this.setState({scale: 'f', temperature});
  }

  render() {
    const scale = this.state.scale;
    const temperature = this.state.temperature;
    const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
    const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;

    return (
      <div className="temp-section">
        <TemperatureInput
          scale="c"
          temperature={celsius}
          onTemperatureChange={this.handleCelChange} />
        <TemperatureInput
          scale="f"
          temperature={fahrenheit}
          onTemperatureChange={this.handleFahChange} />
        <BoilingVerdict
          celsius={parseFloat(celsius)} />
      </div>
    );
  }
}

export default Calculator;