import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { TITLE_BACKGROUND } from 'shared/styles';

const LoadingPlacehHolder = (props) => {
  const { className, children } = props;
  return (
    <div className={`loading placeholder ${className}`}>
      {children}
    </div>
  );
};

LoadingPlacehHolder.displayName = 'LoadingPlacehHolder';
LoadingPlacehHolder.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};
LoadingPlacehHolder.defaultProps = {
  className: '',
};

const LoadingPlacehHolderStyled = styled(LoadingPlacehHolder)`
  background: repeating-linear-gradient(135deg, #eee, ${TITLE_BACKGROUND} 15%);
  ${props => props.width ? `width: ${props.width}` : ''}
  ${props => props.height ? `width: ${props.height}` : ''}
`;
LoadingPlacehHolderStyled.displayName = 'LoadingPlacehHolderStyled';

export default LoadingPlacehHolderStyled;
