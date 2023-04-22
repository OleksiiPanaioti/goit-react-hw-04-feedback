import React from 'react';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      <ul>
        <li>
          <button type="button" onClick={() => onLeaveFeedback('good')}>
            Good
          </button>
        </li>
        <li>
          <button type="button" onClick={() => onLeaveFeedback('neutral')}>
            Neutral
          </button>
        </li>
        <li>
          <button type="button" onClick={() => onLeaveFeedback('bad')}>
            Bad
          </button>
        </li>
      </ul>
    </div>
  );
};

export default FeedbackOptions;
