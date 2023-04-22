// import proptypes from 'proptypes';

import React, { Component } from 'react';

class Statistics extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleButtonClick = type => {
    this.setState(prevState => ({ [type]: prevState[type] + 1 }));
  };

  // countTotalFeedback();

  // countPositiveFeedbackPercentage();

  render() {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;

    return (
      <div>
        <ul>
          <li>
            <button
              type="button"
              onClick={() => this.handleButtonClick('good')}
            >
              Good
            </button>
          </li>
          <li>
            <button
              type="button"
              onClick={() => this.handleButtonClick('neutral')}
            >
              Neutral
            </button>
          </li>
          <li>
            <button type="button" onClick={() => this.handleButtonClick('bad')}>
              Bad
            </button>
          </li>
        </ul>

        <h2>Statistics</h2>

        <ul>
          <li>good:{good}</li>
          <li>Neutral:{neutral}</li>
          <li>Bad:{bad}</li>
          <li>Total:{total}</li>
          <li>Postitve:{}</li>
        </ul>
      </div>
    );
  }
}

export default Statistics;
