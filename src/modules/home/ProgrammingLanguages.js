import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { getFontColorInBackground } from 'utils';
import {
  TechLangTypes,
  techLangs,
  minCodeStrength,
  getColorByCodeStrength,
} from 'shared/data';
import { Button, ButtonGroup, Panel, SmallTab, Tabs } from 'components';

const ProgrammingLanguages = (props) => {
  const { title, titleUrl, className, ...restProps } = props;
  const [currTabId, setCurrTabId] = useState(0);
  const handleTabChange = (e, tabId) => {
    setCurrTabId(tabId);
  };

  const getFilteredTechLangs = () => {
    const filteredTechs = currTabId === 0 
      ? techLangs 
      : techLangs.filter(techLang => techLang.type === TechLangTypes[currTabId].key);
    filteredTechs.sort((tech1, tech2) => tech2.value - tech1.value);
    return filteredTechs;
  };

  return (
    <Panel
      theme="danger"
      title={title}
      titleUrl={titleUrl}
      className={className}
      {...restProps}
    >
      <div>
        <Tabs variant="standard" value={currTabId} onChange={handleTabChange}>{
          TechLangTypes.map((langType, key) => (<SmallTab key={key} label={langType.label} />))
        }</Tabs>
        <ButtonGroup>
          {getFilteredTechLangs().map((item, index) => {
            const value = item.value !== undefined ? item.value : minCodeStrength;
            const backgroundColor = getColorByCodeStrength(value);
            const color = getFontColorInBackground(backgroundColor);
            const strength = item.value !== undefined ? `${item.value} year${item.value > 1 ? 's' : ''} of experience` : '';
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
      </div>
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
