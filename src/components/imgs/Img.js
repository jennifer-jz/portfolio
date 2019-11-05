import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { filterNonHtmlProps } from 'utils';

const ImgUnstyled = (props) => {
  const { className, title, src, ...otherProps } = props;
  const obj = require(`../../public${src}`);

  return (
    <img
      className={className}
      alt={title}
      src={obj}
      {...filterNonHtmlProps(otherProps)}
    />
  );
};

ImgUnstyled.displayName = "ImgUnstyled";
ImgUnstyled.propTypes = {
  className: PropTypes.string,
  src: PropTypes.any,
  title: PropTypes.string,
};
ImgUnstyled.defaultProps = {
  className: '',
  title: 'Image',
};

const Img = styled(ImgUnstyled)`
  display: block;
  max-width: 100%;
  height: auto;
`;

export default Img;