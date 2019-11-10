import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { filterNonHtmlProps } from 'utils';

const IconUnstyled = (props) => {
  const { className, id, ...otherProps } = props;
  return (<i className={`fa ${id} ${className}`} { ...filterNonHtmlProps(otherProps)}></i>);
};

IconUnstyled.displayName = "IconUnstyled";
IconUnstyled.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
};
IconUnstyled.defaultProps = {
  className: "",
  id: "",
};

export default styled(IconUnstyled)`
  font-size: 26px !important;
`;