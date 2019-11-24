import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ImageLoader from 'react-load-image';
import { filterNonHtmlProps } from 'utils';
import LoadingIndicator from '../LoadingIndicator';

const ImgUnstyled = (props) => {
  const { className, title, src, ...otherProps } = props;
  // const obj = require(`../../public${src}`);
  return (
    <ImageLoader src={src}>
      <img
        className={className}
        alt={title}
        {...filterNonHtmlProps(otherProps)}
      />
      <div>Error</div>
      <LoadingIndicator className="preloader" image />
    </ImageLoader>
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