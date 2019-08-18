import React from 'react';
import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';

const Link = (props) => {
  const { href, to, openNew, className, children, ...otherProps } = props;
  const shouldOpenNew = openNew !== undefined || !!href;
  const openNewOption = shouldOpenNew ? {
    target: "_blank",
    rel: "noopener noreferrer",
  } : {};
  return (
    <RouterLink
      href={href}
      to={to}
      className={className}
      {...openNewOption}
      {...otherProps}
    >
      {children}
    </RouterLink>
  );
};

Link.displayName = "Link";
Link.propTypes = {
  href: PropTypes.string,
  to: PropTypes.string,
  openNew: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string, PropTypes.arrayOf(PropTypes.node)]),
};
Link.defaultProps = {
  href: undefined,
  to: undefined,
  openNew: undefined,
  className: '',
};

export default Link;
