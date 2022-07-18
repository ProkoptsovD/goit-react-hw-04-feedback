import { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from 'theme';

import Section from './common/Section';
import FeedbackOptions from './FeedbackOptions';
import Notification from './Notification';
import Statistics from './Statistics';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  }
  onLeaveFeedback = (e) => {
    const stat = e.target.name;

    this.setState(prevState => ({
        [stat]: prevState[stat] += 1,
      }))
  }
  countTotalFeedback = () => Object.keys(this.state).reduce((total, feedback) => total + this.state[feedback], 0);
  countPositiveFeedbackPercentage = () => +(this.state.good * 100 / this.countTotalFeedback()).toFixed(0);
  render () {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();

    return (
      <ThemeProvider theme={theme}>
        <Section
          title="Please leave feedback"
        >
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        <Section
          title="Statistics"
        >
          {
            total
              ?  <Statistics
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
  }
};
