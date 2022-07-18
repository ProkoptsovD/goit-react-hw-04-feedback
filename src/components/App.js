import { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from 'theme';

import Section from './common/Section';
import FeedbackOptions from './FeedbackOptions';
import Notification from './Notification';
import Statistics from './Statistics';

export const App = () => {
  const [ good, setGood ] = useState(0);
  const [ neutral, setNeutral ] = useState(0);
  const [ bad, setBad ] = useState(0);
  const [ total, setTotal ] = useState(0);
  const [ positivePercentage, setPositivePercentage ] = useState(0);

  const feedbackGradeMap = {
    'good': () => setGood(good + 1),
    'neutral': () => setNeutral(neutral + 1),
    'bad': () => setBad(bad + 1)
  }
  const feedbackGrades = Object.keys(feedbackGradeMap);

  const onLeaveFeedback = ({ target: { name} }) => {
    feedbackGradeMap[name]();
  }
  
  useEffect(() => {
    const countTotalFeedback = () => good + neutral + bad;
    const total = countTotalFeedback();

    const countPositiveFeedbackPercentage = () => total && +(good * 100 / total).toFixed(0);
    const positivePercentage = countPositiveFeedbackPercentage();

    setTotal(total);
    setPositivePercentage(positivePercentage);

  }, [good, neutral, bad])

    
    return (
      <ThemeProvider theme={theme}>
        <Section
          title="Please leave feedback"
        >
          <FeedbackOptions
            options={feedbackGrades}
            onLeaveFeedback={onLeaveFeedback}
          />
        </Section>
        <Section
          title="Statistics"
        >
          {
            total ? <Statistics
                      good={good}
                      neutral={neutral}
                      bad={bad}
                      total={total}
                      positivePercentage={positivePercentage}
                    />
                  : <Notification message="There is no feedback"/>
          }
        </Section>
      </ThemeProvider>
    );
};
