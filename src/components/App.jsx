import { useState } from 'react';

import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';

export const App = () => {
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);

    const options = { good, neutral, bad };
    const total = good + neutral + bad;
    const positivePercentage = ((good / total) * 100).toFixed(0);

    const onLeaveFeedback = e => {
        switch (e.target.value) {
            case 'good':
                setGood(good + 1);
                break;
            case 'neutral':
                setNeutral(neutral + 1);
                break;
            case 'bad':
                setBad(bad + 1);
                break;

            default:
                break;
        }
    };

    return (
        <>
            <Section title="Please live feedback">
                <FeedbackOptions
                    options={Object.keys(options)}
                    onLeaveFeedback={onLeaveFeedback}
                ></FeedbackOptions>
            </Section>
            <Section title="Statistics">
                {total ? (
                    <Statistics
                        good={good}
                        neutral={neutral}
                        bad={bad}
                        total={total}
                        positivePercentage={positivePercentage}
                    ></Statistics>
                ) : (
                    <Notification messege="There is no feedback" />
                )}
            </Section>
        </>
    );
};
