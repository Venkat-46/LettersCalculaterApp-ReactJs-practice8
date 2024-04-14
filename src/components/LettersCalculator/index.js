// Write your code here.

import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {count: 0}

  updateCount = event => {
    const inputString = event.target.value
    this.setState({count: inputString.length})
  }

  render() {
    const {count} = this.state
    return (
      <div className="app-container">
        <div className="calculator-container">
          <h1 className="heading">Calculate the Letters you enter</h1>
          <label htmlFor="inputText" className="label">
            Enter the phrase
          </label>
          <br />
          <input
            id="inputText"
            type="text"
            placeholder="Enter the phrase"
            className="user-input"
            onChange={this.updateCount}
          />
          <div className="count-text-container">
            <p className="count-text">No.of letters: {count}</p>
          </div>
        </div>
        <div className="image-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
            className="image"
          />
        </div>
      </div>
    )
  }
}
export default LettersCalculator
