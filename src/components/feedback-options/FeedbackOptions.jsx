import { FeedbackButton, OptionsWrapper } from "./FeedbackOptions.styled"
import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    const optionsArray = Object.keys(options);
    return (
        <OptionsWrapper style={{ marginBottom: "20px" }}>
            {optionsArray.map(item => {
                return (<FeedbackButton type="button" key={item} onClick={() => onLeaveFeedback(item)} >{item}</FeedbackButton>)
            })
            }
        </OptionsWrapper>
    )
}

FeedbackOptions.propTypes = {
    options: PropTypes.shape().isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
}
