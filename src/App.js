import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {}
  }
  onInputChange(e) {
    const val = e.target.value
    const parts = val.match(/(\d+)([\+*])(\d+)/)
    if (!parts) return
    parts
    const left = parseInt(parts[1]) // ?
    const operator = parts[2] // ?
    const right = parseInt(parts[3]) // ?
    let  result
    if (operator === '+') {
      result = left + right
    } else if (operator === '*') {
      result = left * right
    }
    result
    this.setState({ result })
  }
  render() {
    return (
      <div className="App">
        <input onChange={this.onInputChange.bind(this)} />
        <div id="result">{this.state.result}</div>
      </div>
    );
  }
}

export default App;
