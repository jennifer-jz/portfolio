import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Link from './Link';
import { filterNonHtmlProps, getRootUrl } from 'utils';
import { subjectDict } from 'shared/data';
import { LINK_COLOR, DARK_GRAY } from 'shared/styles';

const BadgeUnstyled = (props) => {
  const { href, to, className, keyword, ...otherProps } = props;
  const url = getRootUrl(href || to);
  const openNew = !!href;

  const BadgeSpan = ({...otherProps}) => {
    return (
      <span className={`badge ${className}`} {...otherProps}  >
        {subjectDict[keyword] ? subjectDict[keyword].name : keyword}
      </span>
    );
  };

  if (!url) {
    return (<BadgeSpan {...filterNonHtmlProps(otherProps)} />);
  }

  return (
    <Link href={url} openNew={openNew} {...filterNonHtmlProps(otherProps)}>
      <BadgeSpan />
    </Link>
  );
};

BadgeUnstyled.displayName = "BadgeUnstyled";
BadgeUnstyled.propTypes = {
  href: PropTypes.string,
  to: PropTypes.string,
  keyword: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string, PropTypes.arrayOf(PropTypes.node)]),
};
BadgeUnstyled.defaultProps = {
  href: undefined,
  to: undefined,
  className: '',
  keyword: '',
};

const Badge = styled(BadgeUnstyled)`
  display: inline-block;
  min-width: 10px;
  padding: 3px 7px;
  font-size: 12px;
  font-weight: 700;
  line-height: 1;
  color: #fff;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  border-radius: 10px;
  ${props => props.href || props.to ? `
    background-color: ${LINK_COLOR};
    &:hover {
      cursor: pointer;
      box-shadow: 2px 2px 8px ${LINK_COLOR};
    }
  ` : `
    background-color: ${DARK_GRAY};
    &:hover {
      cursor: default;
      background-color: ${DARK_GRAY};
    }
  `}
`;

export default Badge;
