import React from 'react';
import PropTypes from 'prop-types';

const Navigation = (props) => {
  const { activeTab } = props;
  console.log('navigator props', props);
  return (
    <nav className="navbar navbar-lights">
      <div className="container">
        <div className="" id="myNavbar">
          <ul className="nav nav-tabs">
            <li className={activeTab === "home" ? "active" : ""}><a href="/home">Home</a></li>
            <li className={activeTab === "experience" ? "active" : ""}><a title="Experience" href="/experience">Experience</a></li>
            <li className={activeTab === "product" ? "active" : ""}><a title="Product Demo" href="/product">Demo</a></li>
            <li className={activeTab === "capability" ? "active" : ""}><a title="Capability" href="/capability">Capability</a></li>
            <li className={activeTab === "solution" ? "active" : ""}><a title="Solution" href="/solution">Tech Solution</a></li>
            <li className={activeTab === "nlp" ? "active" : ""}><a title="Natural Language Processing" href="/nlp">NLP</a></li>
            <li className={activeTab === "education" ? "active" : ""}><a href="/education">Education</a></li>
            <li className={activeTab === "aboutme" ? "active" : ""}><a title="About Me" href="/aboutme">About Me</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

Navigation.displayName = "Navigation";
Navigation.propTypes = {
  activeTab: PropTypes.string,
};
Navigation.defaultProps = {
  activeTab: '',
};

export default Navigation;
