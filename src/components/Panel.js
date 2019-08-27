import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Link from './Link';

const PanelUnstyled = (props) => {
  const { id, theme, className, title, titleUrl, children } = props;
  return (
    <div id={id} className={`panel-group ${className}`}>
      <div className={`panel panel-${theme}`}>
        <div className="panel-heading">
          <h4 className="panel-title">
            {titleUrl && <Link to={titleUrl}>{title}</Link>}
            {!titleUrl && title}
          </h4>
        </div>
        <div>
          <div className={`panel-body`}>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};
PanelUnstyled.displayName = "PanelUnstyled";
PanelUnstyled.propTypes = {
  id: PropTypes.string,
  theme: PropTypes.string,
  className: PropTypes.string,
  title: PropTypes.string,
  titleUrl: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string, PropTypes.arrayOf(PropTypes.node)]),
};
PanelUnstyled.defaultProps = {
  theme: '',
  title: '',
  titleUrl: '',
  className: '',
};

const Panel = styled(PanelUnstyled)`
  .panel-title a {
    text-decoration: underline;
  }

  .panel-heading {
    padding: 3px 10px;
    background-color:#F2F3F4 !important;
  }

  p > span {
    font-weight: bold;
    padding: 20px;
  }

  p span.badge {
    margin-left: 10px;
    margin-bottom: 2px;
  }
`;

export default Panel;