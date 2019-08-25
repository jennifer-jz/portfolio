import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';
import { LinkIcon } from 'components/icons';
import { filterNonHtmlProps } from 'utils';
import { rootDirectory } from 'src/siteConfig.json';

const LinkUnstyled = (props) => {
  const { href, to, icon, openNew, className, children, ...otherProps } = props;
  const shouldOpenNew = openNew !== undefined ? openNew : !!href;
  const openNewOption = shouldOpenNew ? {
    target: "_blank",
    rel: "noopener noreferrer",
  } : {};
  let url = href || to;
  if (rootDirectory && !new RegExp(`^${rootDirectory}`).test(url)) {
    url = rootDirectory + url;
  }

  if (to) {
    return (
      <RouterLink
        to={url}
        className={className}
        {...filterNonHtmlProps(otherProps)}
      >
        {children}
        {icon && <LinkIcon />}
      </RouterLink>
    );
  }

  return (
    <a
      href={url}
      className={className}
      {...openNewOption}
      {...filterNonHtmlProps(otherProps)}
    >
      {children}
      {icon && <LinkIcon />}
    </a>
  );
};

LinkUnstyled.displayName = "LinkUnstyled";
LinkUnstyled.propTypes = {
  href: PropTypes.string,
  to: PropTypes.string,
  openNew: PropTypes.bool,
  icon: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string, PropTypes.arrayOf(PropTypes.node)]),
};
LinkUnstyled.defaultProps = {
  href: undefined,
  to: undefined,
  openNew: undefined,
  icon: false,
  className: '',
};

const Link = styled(LinkUnstyled)`
  color: #337ab7;
`;

export default Link;
