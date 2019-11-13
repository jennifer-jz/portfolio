import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ImageLoader from 'react-load-image';
import { filterNonHtmlProps } from 'utils';

function Preloader() {
  return (<div className="preloader">Loading...</div>);
}

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
      <Preloader />
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