import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Link from './Link';
import { filterNonHtmlProps, getRootUrl } from 'utils';
import { subjectDict } from 'shared/data';

const BadgeUnstyled = (props) => {
  const { href, to, className, keyword, ...otherProps } = props;
  const url = getRootUrl(href || to);
  const openNew = !!href;

  const BadgeSpan = ({...otherProps}) => {
    return (
      <span className={`badge ${className}`} {...otherProps}  >
        {subjectDict[keyword] && subjectDict[keyword].name}
      </span>
    );
  };

  if (!url) {
    return (<BadgeSpan {...filterNonHtmlProps(otherProps)} />);
  }

  return (
    <Link to={url} openNew={openNew} {...filterNonHtmlProps(otherProps)}>
      <span className="badge">
        {subjectDict[keyword] && subjectDict[keyword].name}
      </span>
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
`;

export default Badge;
