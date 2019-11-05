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
  position: relative;

  ::before {
    content: attr(data-tip);
    visibility: hidden;
    position: absolute;
    top: -70%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: dimgray;
    color: white;
    padding: 6px 12px;
    border-radius: 4px;
    opacity: 0;
    transition: opacity 0.3s;
  }

  :hover::before {
    visibility: visible;
    opacity: 1;
  }
`;

export default Button;