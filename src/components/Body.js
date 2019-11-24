import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { filterNonHtmlProps } from 'utils';

const BodyUnstyled = (props) => {
  const { children, className, ...otherProps } = props;
  return (
    <div
      className={`mainbody ${className}`}
      { ...filterNonHtmlProps(otherProps) }
    >
      {children}
    </div>
  );
};
BodyUnstyled.displayName = "BodyUnstyled";
BodyUnstyled.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string, PropTypes.arrayOf(PropTypes.node)]),
};
BodyUnstyled.defaultProps = {
  className: '',
};

const Body = styled(BodyUnstyled)`
  padding: 80px 60px 20px;
  min-height: calc(100vh - 120px);

  @media (max-width: 768px) and (min-width: 576px) {
    padding: 80px 30px 20px;
  }

  @media (max-width: 576px) {
    padding: 80px 10px 20px;
  }

  .row {
      margin-left: 0;
      margin-right: 0;
  }
`;

export default Body;