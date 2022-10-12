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
