import PropTypes from 'prop-types';
import { Btn } from './Button.styled';

const Button = ({ children, onClick, name }) => {
    return (
        <Btn
            onClick={onClick}
            name={name}
        >
            {children}
        </Btn>
    )
};

Button.propTypes = {
    children: PropTypes.any,
    onClick: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired
}

export default Button;