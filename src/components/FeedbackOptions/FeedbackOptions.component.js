import PropTypes from 'prop-types';
import Button from 'components/common/Button';
import { OptionList, OptionListItem } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        <OptionList>
            {
                options.map(option => (
                    <OptionListItem
                        key={option}
                    >
                        <Button
                            onClick={onLeaveFeedback}
                            name={option}
                        >
                            {option}
                        </Button>
                    </OptionListItem>
                ))
            }
        </OptionList>
    )
}

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired
}

export default FeedbackOptions;