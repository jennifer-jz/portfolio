import React from 'react';
import PropTypes from 'prop-types';
import {
  achievements,
} from 'shared/data';
import { Link, Panel } from 'components';

const Achievement = (props) => {
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
        {achievements.map((item, index) => (
          <li key={index} className="list-group-item">
            {item.title}
            {/* {item.keywords && item.keywords.reverse().map((keyword, i) =>
              <Badge key={i} keyword={keyword} />
            )} */}
            {item.ref && <Link href={item.ref.url}>{item.ref.title}</Link>}
          </li>
        ))}
      </ul>
    </Panel>
  );
};

Achievement.displayName = "Achievement";
Achievement.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  theme: PropTypes.string,
  className: PropTypes.string,
  titleUrl: PropTypes.string,
};
Achievement.defaultProps = {
  title: "Achievement",
  theme: "danger",
  className: "",
  titleUrl: "",
};

export default Achievement;
