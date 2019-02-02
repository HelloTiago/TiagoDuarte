import React from 'react';
import PropTypes from 'prop-types';
import { Text } from './button.css';

const Button = ({
  children, as = 'button', color, onClick,
}) => {
  const handleClick = (e) => {
    // if (this.props.disabled) {
    //   e.preventDefault();
    //   return;
    // }

    if (onClick) {
      onClick(e);
    }
  };

  return (
    <Text as={as} onClick={handleClick} color={color}>
      {children}
    </Text>
  );
};

Button.propTypes = {
  children: PropTypes.string.isRequired,
  as: PropTypes.string,
  color: PropTypes.oneOf(['primary', 'secondary']),
  onClick: PropTypes.func,
};

export default Button;
