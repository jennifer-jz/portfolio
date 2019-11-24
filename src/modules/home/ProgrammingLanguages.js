import React from 'react';
import PropTypes from 'prop-types';
import { getFontColorInBackground } from 'utils';
import {
  techLangs,
  minCodeStrength,
  getColorByCodeStrength,
} from 'shared/data';
import { Button, ButtonGroup, Panel } from 'components';

const ProgrammingLanguages = (props) => {
  const { title, titleUrl, className, ...restProps } = props; 

  return (
    <Panel
      theme="danger"
      title={title}
      titleUrl={titleUrl}
      className={className}
      {...restProps}
    >
      <ButtonGroup>
        {techLangs.map((item, index) => {
          const value = item.value !== undefined ? item.value : minCodeStrength;
          const backgroundColor = getColorByCodeStrength(value);
          const color = getFontColorInBackground(backgroundColor);
          const strength = item.value !== undefined ? `${item.value}+ lines` : '';
          return (
            <Button
              key={index}
              random
              style={{ color, backgroundColor }}
              data-tip={strength}
            >
              {item.content}
            </Button>
          );
        })}
      </ButtonGroup>
    </Panel>
  );
};

ProgrammingLanguages.displayName = "ProgrammingLanguages";
ProgrammingLanguages.propTypes = {
  title: PropTypes.string,
  className: PropTypes.string,
  titleUrl: PropTypes.string,
};
ProgrammingLanguages.defaultProps = {
  title: "Programming Language",
  className: "",
  titleUrl: "",
};

export default ProgrammingLanguages;
