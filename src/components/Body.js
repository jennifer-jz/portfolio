import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const BodyUnstyled = (props) => {
  const { children, ...otherProps } = props;
  return (
    <div
      className="mainbody"
      { ...otherProps }
    >{children}</div>
  );
};
BodyUnstyled.displayName = "BodyUnstyled";
BodyUnstyled.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string, PropTypes.arrayOf(PropTypes.node)]),
};

const Body = styled(BodyUnstyled)`
  padding: 70px 30px 20px 30px;
`;

export default Body;