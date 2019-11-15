import React from 'react';
import PropTypes from 'prop-types';
import { getFontColorInBackground } from 'utils';
import {
  getColorByExperience,
} from 'shared/data';
import { Button, ButtonGroup, Panel } from 'components';
import { coreExperiences } from '../../shared/data';

const CoreExperiences = (props) => {
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
        {coreExperiences && coreExperiences.map((item, index) => {
          const backgroundColor = getColorByExperience(item.value);
          const color = getFontColorInBackground(backgroundColor);
          return (
            <Button
              key={index}
              style={{ color, backgroundColor }}
              random
              data-tip={`${item.value} years`}
            >
              {item.content}
            </Button>);
        })}
      </ButtonGroup>
    </Panel>
  );
};

CoreExperiences.displayName = "CoreExperiences";
CoreExperiences.propTypes = {
  title: PropTypes.string,
  className: PropTypes.string,
  titleUrl: PropTypes.string,
};
CoreExperiences.defaultProps = {
  title: "Experience",
  className: "",
  titleUrl: "experience",
};

export default CoreExperiences;
