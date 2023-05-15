import { BtnContainer, Button } from './FeedbackOptions.styled';
import React from 'react';
import PropTypes from 'prop-types';

export default function Feedback({ options, onLeaveFeedback }) {
  return (
    <BtnContainer>
      {options.map(option => {
        return (
          <Button
            type="button"
            key={option}
            onClick={() => {
              onLeaveFeedback(option);
            }}
          >
            {option}
          </Button>
        );
      })}
    </BtnContainer>
  );
}

Feedback.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
