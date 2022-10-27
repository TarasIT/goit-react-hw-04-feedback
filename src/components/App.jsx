import { useState } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';

export const App = () => {
  const [good, setGoodFB] = useState(0);
  const [neutral, setNeutralFB] = useState(0);
  const [bad, setBadFB] = useState(0);

  const FBOptions = [good, neutral, bad];

  const addFeedback = option => {
    if (option === 'good') setGoodFB(good + 1);
    if (option === 'neutral') setNeutralFB(neutral + 1);
    if (option === 'bad') setBadFB(bad + 1);
  };

  const totalFB = FBOptions.reduce((prev, current) => prev + current);
  const goodFBPercent = Math.ceil((good * 100) / totalFB);

  return (
    <Section title="Please leave feedback">
      <FeedbackOptions onLeaveFeedback={addFeedback}></FeedbackOptions>
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        total={totalFB}
        positivePercentage={goodFBPercent}
      />
    </Section>
  );
};
