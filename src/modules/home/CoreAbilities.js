import React from 'react';
import PropTypes from 'prop-types';
import {
  coreAbilities,
} from 'shared/data';
import { Panel } from 'components';

const CoreAbilities = (props) => {
  const { title, titleUrl, theme, className, id, ...restProps } = props; 

  return (
    <Panel
      theme={theme}
      id={id}
      title={title}
      titleUrl={titleUrl}
      className={className}
      {...restProps}
    >
      <ul className="list-group">
        {coreAbilities && coreAbilities.map((item, index) => (
          <li key={index} className="list-group-item">{item.content}</li>
        ))}
      </ul>
    </Panel>
  );
};

CoreAbilities.displayName = "CoreAbilities";
CoreAbilities.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  theme: PropTypes.string,
  className: PropTypes.string,
  titleUrl: PropTypes.string,
};
CoreAbilities.defaultProps = {
  title: "Core Abilities",
  theme: "danger",
  className: "",
  titleUrl: "",
};

export default CoreAbilities;
