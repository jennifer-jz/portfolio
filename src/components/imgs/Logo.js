import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import LogoImg from 'public/img/houzi.jpg';
import { version } from 'root/package.json';

const LogoUnstyled = (props) => {
  const { className } = props;
  return (
    <div className={`logo ${className}`}>
      <img src={LogoImg} />
      <span>{version}</span>
    </div>
  );
};
LogoUnstyled.displayName = "LogoUnstyled";
LogoUnstyled.propTypes = {
  className: PropTypes.string,
};
LogoUnstyled.defautProps = {
  className: "",
};

const Logo = styled(LogoUnstyled)`
  position: absolute;
  top: 6px;
  left: 20px;
  
  img {
    width: 35px;
    height: 35px;
    border-radius: 50%;
  }

  span {
    margin-left: 10px;
  }
`;

export default Logo;
