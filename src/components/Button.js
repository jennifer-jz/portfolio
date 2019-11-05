import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { filterNonHtmlProps, getControlledColor } from 'utils';

const ButtonUnstyled = (props) => {
  const { theme, className, children, ...otherProps } = props;
  return (
    <button
      type="button"
      className={`btn ${theme ? `btn-${theme}` : ''} ${className}`}
      {...filterNonHtmlProps(otherProps)}
    >
      {children}
    </button>
  );
};
ButtonUnstyled.displayName = "ButtonUnstyled";
ButtonUnstyled.propTypes = {
  random: PropTypes.bool,
  theme: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string, PropTypes.arrayOf(PropTypes.node)]),
};
ButtonUnstyled.defaultProps = {
  random: false,
  theme: '',
  className: '',
};

const Button = styled(ButtonUnstyled)`
  ${(props) => {
    const commonStyle = `
      position: relative;
      ${props.random ? `background: ${getControlledColor()};`: ''}
      opacity: 0.8;
      color: white;
      font-size: 14px;
    `;
    if (!props['data-tip']) return commonStyle;
    return `
      ${commonStyle}
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
  }}
`;

export default Button;