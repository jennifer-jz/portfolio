import React from 'react';
import PropTypes from 'prop-types';
import Paths from 'shared/routePaths';
import { withRouter } from 'react-router-dom';

const Navigation = (props) => {
  const { pathname } = props.history.location;
  function isPathMatched(path) {
    return pathname.startsWith(path);
  }
  function getClassName(path) {
    return isPathMatched(path) ? "active" : "";
  }

  return (
    <nav className="navbar navbar-lights">
      <div className="container">
        <div className="" id="myNavbar">
          <ul className="nav nav-tabs">
            <li className={getClassName(Paths.HOME)}><a href={Paths.HOME}>Home</a></li>
            <li className={getClassName(Paths.EXPERIENCE)}>
              <a title="Experience" href={Paths.EXPERIENCE}>Experience</a>
            </li>
            <li className={getClassName(Paths.PRODUCT)}>
              <a title="Product Demo" href={Paths.PRODUCT}>Demo</a>
            </li>
            <li className={getClassName(Paths.CAPABILITY)}>
              <a title="Capability" href={Paths.CAPABILITY}>Capability</a>
            </li>
            {/* <li className={getClassName(Paths.SOLUTION)}>
              <a title="Solution" href={Paths.SOLUTION}>Tech Solution</a>
            </li> */}
            <li className={getClassName(Paths.NLP)}>
              <a title="Natural Language Processing" href={Paths.NLP}>NLP</a>
            </li>
            <li className={getClassName(Paths.EDUCATION)}>
              <a href={Paths.EDUCATION}>Education</a>
            </li>
            <li className={getClassName(Paths.ABOUTME)}>
              <a title="About Me" href={Paths.ABOUTME}>About Me</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

Navigation.displayName = "Navigation";
Navigation.propTypes = {
  history: PropTypes.object,
};
Navigation.defaultProps = {
  history: {},
};

export default withRouter(Navigation);
