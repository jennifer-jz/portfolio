import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { CircularProgress } from '@material-ui/core';
import { TITLE_BACKGROUND, BLUE } from 'shared/styles';

const LoadingIndicator = (props) => {
  const { className, image } = props;

  return (
    <div className={`loading placeholder ${className}`}>
      {!image && <CircularProgress />}
    </div>
  );
  
};

LoadingIndicator.displayName = 'LoadingIndicator';
LoadingIndicator.propTypes = {
  className: PropTypes.string,
  image: PropTypes.bool,
};
LoadingIndicator.defaultProps = {
  className: '',
};

const LoadingIndicatorStyled = styled(LoadingIndicator)`
  ${props => props.width ? `width: ${props.width}` : ''}
  ${props => props.height ? `width: ${props.height}` : ''}
  ${props => props.image ? `
    background: repeating-linear-gradient(135deg, #eee, ${TITLE_BACKGROUND} 15%);
  ` : `
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
      color: ${BLUE};
    }
  `}
`;
LoadingIndicatorStyled.displayName = 'LoadingIndicatorStyled';

export default LoadingIndicatorStyled;
