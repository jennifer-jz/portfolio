/* eslint-disable indent */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { CONTENT_BACKGROUND, BOLD_FONT_COLOR, THEME_INFO, THEME_DANGER } from 'shared/styles';
import Link from './Link';

const PanelUnstyled = (props) => {
  const { id, theme, className, title, titleUrl, titleComponent, children } = props;
  return (
    <div id={id} className={`panel-group ${className}`}>
      <div className={`panel panel-${theme}`}>
        <div className="panel-heading">
          <h5 className="panel-title">
            {titleUrl && <Link to={titleUrl}>{title}</Link>}
            {!titleUrl && title}
            {titleComponent}
          </h5>
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
  titleComponent: PropTypes.oneOfType([PropTypes.node, PropTypes.string, PropTypes.arrayOf(PropTypes.node)]),
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string, PropTypes.arrayOf(PropTypes.node)]),
};
PanelUnstyled.defaultProps = {
  theme: '',
  title: '',
  titleUrl: '',
  titleComponent: null,
  className: '',
};

const Panel = styled(PanelUnstyled)`
  margin-bottom: 20px;
  .panel {
    margin-bottom: 0;
    border: none;
  }

  .panel-heading {
    padding: 3px 15px;
    background-color: ${CONTENT_BACKGROUND};
    border-bottom: 0;

    ${props => {
      let color = '';
      switch (props.theme) {
        case "info":
          color = THEME_INFO;
          break;
        case "danger":
          color = THEME_DANGER;
          break;
        default:
          break;
      }
      return `color: ${color};`;
    }};
  }

  .panel-title {
    font-size: 16px;
  }

  .panel-body {
    padding: 15px;

    ul.list-group {
      margin-bottom:0;
    }
  }

  p > span.title {
    font-weight: bold;
    padding: 20px;
    color: ${BOLD_FONT_COLOR};
  }

  p span.badge {
    margin-left: 10px;
    margin-bottom: 2px;
  }
`;

export default Panel;