import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { filterNonHtmlProps } from 'utils';
import { BOLD_FONT_COLOR } from 'shared/styles';

const InlineTitle = (props) => {
  const { children, ...otherProps } = props;
  return (<span {...filterNonHtmlProps(otherProps)}>{children}</span>);
};
InlineTitle.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string, PropTypes.arrayOf(PropTypes.node)]),
};

const InlineTitleStyled = styled(InlineTitle)`
    font-weight: bold;
    padding: 20px;
    color: ${BOLD_FONT_COLOR};
`;

export default InlineTitleStyled;