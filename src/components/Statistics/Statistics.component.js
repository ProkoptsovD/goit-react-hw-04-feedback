import PropTypes from 'prop-types';
import { StatList, StatListItem, StatLabel, StatValue } from './Statistics.styled';

const Statistics = ({ positivePercentage, total, ...restProps }) => {
    
    return (
        <StatList>
            {
                Object.keys(restProps).map(stat => (
                    <StatListItem
                        key={stat}
                    >
                        <StatLabel>
                            {`${stat}:`}
                        </StatLabel>
                        <StatValue>
                            {restProps[stat]}
                        </StatValue>
                    </StatListItem>
                ))
            }
            <StatListItem>
                <StatLabel>Total:</StatLabel>
                <StatValue>{total}</StatValue>
            </StatListItem>
            <StatListItem>
                <StatLabel>Positive feedback:</StatLabel>
                <StatValue>{`${positivePercentage}%`}</StatValue>
            </StatListItem>
        </StatList>
    )
}

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
}

export default Statistics;