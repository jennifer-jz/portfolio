import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  Badge,
  Link,
  InlineTitle,
} from 'components';
import { filterNonHtmlProps } from 'utils';

const ProjectItemUnstyled = (props) => {
  const { className, data: item, ...otherProps } = props;

  return (
    <p
      className={className}
      {...filterNonHtmlProps(otherProps)}
    >
      {item.period}
      <InlineTitle>
        {item.title}
      </InlineTitle>
      {item.url && <Link href={item.url} icon />}
      <span className="keywords">
        {item.keywords && item.keywords.map((keyword, i) =>
          <Badge key={i} keyword={keyword} />
        )}
      </span>
    </p>
  );
};

ProjectItemUnstyled.displayName = "ProjectItemUnstyled";
ProjectItemUnstyled.propTypes = {
  className: PropTypes.string,
  data: PropTypes.object,
};
ProjectItemUnstyled.defaultProps = {
  className: '',
  data: {},
};

const ProjectItem = styled(ProjectItemUnstyled)`
  margin: .5rem 0 1.2rem;
  position: relative;

  .keywords {
    display: block;
    position: absolute;
    top: -20px;
    left: 125px;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
  }

  &:hover {
    .keywords {
      opacity: 1;
    }
  }
`;

export default ProjectItem;