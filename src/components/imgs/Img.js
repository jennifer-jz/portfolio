import React from 'react';
import PropTypes from 'prop-types';
import { filterNonHtmlProps } from 'utils';

const Img = (props) => {
  const { className, src, ...otherProps } = props;
  const obj = require(`../../public${src}`);

  return (
    <img
      className={`img-responsive ${className}`}
      alt="Image"
      src={obj}
      {...filterNonHtmlProps(otherProps)}
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