import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { filterNonHtmlProps } from 'utils';

const ButtonUnstyled = (props) => {
  const { theme, className, children, ...otherProps } = props;
  return (
    <button
      type="button"
      className={`btn btn-${theme} ${className}`}
      data-toggle="tooltip"
      {...filterNonHtmlProps(otherProps)}
    >
      {children}
    </button>
  );
};
ButtonUnstyled.displayName = "ButtonUnstyled";
ButtonUnstyled.propTypes = {
  theme: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string, PropTypes.arrayOf(PropTypes.node)]),
};
ButtonUnstyled.defaultProps = {
  theme: '',
  className: '',
};

const Button = styled(ButtonUnstyled)`
  
`;

export default Button;