import React from 'react';
import PropTypes from 'prop-types';
// import objImg from 'public/png/scidict.png';

const Img = (props) => {
  // eslint-disable-next-line no-unused-vars
  const { className, src, ...otherProps } = props;
  const obj = require(`../../public${src}`);
  console.log('public/png/scidict.png', `public${src}`);
  //   const path = `src/public${src}`;
  //   const path = 'public/png/scidict.png';
  //   const obj = require('../../public/png/scidict.png');
  //   const objImg = require('public/png/scidict.png');
  return (
    <img
      className={`img-responsive ${className}`}
      alt="Image"
      //   src={objImg}
      src={obj}
      {...otherProps}
    />
  );
};

Img.displayName = "Img";
Img.propTypes = {
  className: PropTypes.string,
  src: PropTypes.any,
};
Img.defaultProps = {
  className: '',
};

export default Img;