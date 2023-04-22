// import proptypes from 'proptypes';

import React, { Component } from 'react';
import FeedbackOptions from 'components/buttons/FeedbackOptions';

class Statistics extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onButtonClick = type => {
    this.setState(prevState => ({ [type]: prevState[type] + 1 }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    return total > 0 ? Math.round((good / total) * 100) : 0;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();

    return (
      <div>
        <h1>Expresso Cafe Feedback</h1>

        <FeedbackOptions onLeaveFeedback={this.onButtonClick} />

        {/* <div>
          
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
              <button
                type="button"
                onClick={() => this.handleButtonClick('bad')}
              >
                Bad
              </button>
            </li>
          </ul>
        </div> */}

        <div>
          <h2>Statistics</h2>
          <ul>
            <li>good:{good}</li>
            <li>Neutral:{neutral}</li>
            <li>Bad:{bad}</li>
            <li>Total:{total}</li>
            <li>Postitve:{positivePercentage}%</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Statistics;
