import React from 'react'

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      num1: "",
      num2: "",
      result: 0
    }

    this.setNum1 = this.setNum1.bind(this);
    this.setNum2 = this.setNum2.bind(this);
    this.clear = this.clear.bind(this);
    this.add = this.add.bind(this);
    this.subtract = this.subtract.bind(this);
    this.multiply = this.multiply.bind(this);
    this.divide = this.divide.bind(this);
  }

  setNum1(e) {
    const num1 = e.target.value ? parseInt(e.target.value) : num1 = "";
    this.setState({num1});
  }

  setNum2(e) {
    const num2 = e.target.value ? parseInt(e.target.value) : num2 = "";
    this.setState({num2});
  }

  clear(e) {
    e.preventDefault();
    this.setState({num1: "", num2: "", result: 0})
  }

  add(e) {
    e.preventDefault();
    const result = this.state.num1 + this.state.num2;
    this.setState({result});
  }

  subtract(e) {
    e.preventDefault();
    const result = this.state.num1 - this.state.num2;
    this.setState({result});
  }

  multiply(e) {
    e.preventDefault();
    const result = this.state.num1 * this.state.num2;
    this.setState({result});
  }

  divide(e) {
    e.preventDefault();
    const result = this.state.num1 / this.state.num2;
    this.setState({result});
  }


  render() {
    const num1 = this.state.num1;
    const num2 = this.state.num2;
    const result = this.state.result;
    return (
      <div>
        <h1>Calculator:</h1>
        <div className='calc'>
          <h1>{result}</h1>
          <p>           
            <input onChange={this.setNum1} value={num1} />
            <input onChange={this.setNum2} value={num2} />
            <button onClick={this.clear}>Clear</button>
            <br />
            <button onClick={this.add}>+</button>
            <button onClick={this.subtract}>-</button>
            <button onClick={this.multiply}>*</button>
            <button onClick={this.divide}>/</button>
          </p>
        </div>
      </div>
    )
  }

}

export default Calculator;
