import PropTypes from 'prop-types';

import { OptionButton, BtnWrapper } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        <BtnWrapper>
            {options.map(option => (
                <OptionButton
                    type="button"
                    key={option}
                    value={option}
                    onClick={onLeaveFeedback}
                >
                    {option}
                </OptionButton>
            ))}
        </BtnWrapper>
    );
};

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
};
