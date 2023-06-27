// import PropTypes from 'prop-types';
// import css from './Feedback.module.css';
import React from 'react'
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions'
import Section from './Section';
import Notification from './Notification'


class Feedback extends React.Component {
  state = {
    good: this.props.state.good,
    neutral: this.props.state.neutral,
    bad: this.props.state.bad,
  };


  onLeaveFeedback = option => {
    this.setState(prevState => {
      return {
        [option]: prevState[option] + 1,
      };
    });
  };
  countTotalFeedback = () => {
    return this.state.good + this.state.bad + this.state.neutral;
  };

  countPositiveFeedbackPercentage = () => {
    if (this.state.good / !this.countTotalFeedback())
      return (this.state.good / this.countTotalFeedback()) * 100;
    else {
      return 0;
    }
  };

  render() {

    const totalFeedback = this.countTotalFeedback();
    const positiveFeedback = this.countPositiveFeedbackPercentage().toFixed();

    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.onLeaveFeedback}
          ></FeedbackOptions>
          { (totalFeedback !==0) ? <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            totalFeedback={totalFeedback}
            positiveFeedback={positiveFeedback}
          ></Statistics> 
          :<Notification message="There is no feedback"></Notification>}

        </Section>
      </div>
    );
  }
}

export default Feedback