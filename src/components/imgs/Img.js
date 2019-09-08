import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { filterNonHtmlProps } from 'utils';

const ImgUnstyled = (props) => {
  const { className, src, ...otherProps } = props;
  const obj = require(`../../public${src}`);

  return (
    <img
      className={className}
      alt="Image"
      src={obj}
      {...filterNonHtmlProps(otherProps)}
    />
  );
};

ImgUnstyled.displayName = "ImgUnstyled";
ImgUnstyled.propTypes = {
  className: PropTypes.string,
  src: PropTypes.any,
};
ImgUnstyled.defaultProps = {
  className: '',
};

const Img = styled(ImgUnstyled)`
  display: block;
  max-width: 100%;
  height: auto;
`;

export default Img;