import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Component } from 'react';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';

export class App extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
    };

    onLeaveFeedback = e => {
        const currentBtnValue = e.currentTarget.value;
        this.setState(prevState => ({
            [currentBtnValue]: prevState[currentBtnValue] + 1,
        }));
    };

    countTotalFeedback = () =>
        Object.values(this.state).reduce((a, b) => a + b, 0);

    countPositiveFeedbackPercentage = () => {
        const total = this.countTotalFeedback();
        const positivePercentage = ((this.state.good / total) * 100).toFixed(0);
        return isNaN(positivePercentage) ? '0' : positivePercentage;
    };

    render() {
        const { good, neutral, bad } = this.state;
        return (
            <>
                <Section title="Please live feedback">
                    <FeedbackOptions
                        options={Object.keys(this.state)}
                        onLeaveFeedback={this.onLeaveFeedback}
                    ></FeedbackOptions>
                </Section>
                <Section title="Statistics">
                    {this.countTotalFeedback() ? (
                        <Statistics
                            good={good}
                            neutral={neutral}
                            bad={bad}
                            total={this.countTotalFeedback()}
                            positivePercentage={this.countPositiveFeedbackPercentage()}
                        ></Statistics>
                    ) : (
                        <Notification massege="There is no feedback" />
                    )}
                </Section>
            </>
        );
    }
}
