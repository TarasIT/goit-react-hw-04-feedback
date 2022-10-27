import PropTypes from 'prop-types';
import { FeedbackButtons, Button } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ onLeaveFeedback }) => {
  const selectedFeedback = e => onLeaveFeedback(e.target.name);

  return (
    <FeedbackButtons>
      <Button onClick={selectedFeedback} name="good" type="button">
        Good
      </Button>
      <Button onClick={selectedFeedback} name="neutral" type="button">
        Neutral
      </Button>
      <Button onClick={selectedFeedback} name="bad" type="button">
        Bad
      </Button>
    </FeedbackButtons>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};
