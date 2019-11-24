import React from 'react';
import PropTypes from 'prop-types';
import Loadable from 'react-loadable';
import {
  homeProducts,
} from 'shared/data';
import { Panel, LoadingIndicator } from 'components';

const DemoItem = Loadable({
  loader: () => import('../common/DemoItem'),
  // eslint-disable-next-line react/display-name
  loading: () => <LoadingIndicator image />,
});

const HomeDemos = (props) => {
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
      <div className="container-fluid row demos">
        {homeProducts.map((item, key) => (
          <DemoItem
            key={key}
            data={item}
            urlHead="/home"
            className="col-lg-3 col-md-6 col-sm-12"
          />
        ))}
      </div>
    </Panel>
  );
};

HomeDemos.displayName = "HomeDemos";
HomeDemos.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  theme: PropTypes.string,
  className: PropTypes.string,
  titleUrl: PropTypes.string,
};
HomeDemos.defaultProps = {
  title: "Product Demo",
  theme: "info",
  className: "",
  titleUrl: "",
};

export default HomeDemos;
