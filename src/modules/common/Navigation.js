import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { navPathArr } from 'shared/routePaths';
import { Logo } from 'components/imgs';
import { withRouter } from 'react-router-dom';
import styles from './Navigation.styles';

const Navigation = (props) => {
  function getMatchedPathId () {
    const { pathname } = props.history.location;
    for (let i = 0; i < navPathArr.length; i++) {
      if (pathname.startsWith(navPathArr[i][1])) {
        return i;
      }
    }
    return 0;
  }

  function getMatchedPath (id) {
    return navPathArr[id][1];
  }
  
  function handleChange (e, tabId) {
    window.location.href = getMatchedPath(tabId);
  }

  const logoSrc = "/img/houzi.jpg";

  const tabId = getMatchedPathId();

  const { className } = props;

  return (
    <Paper className={`navbar ${className}`}>
      <Logo src={logoSrc} />
      <Tabs
        value={tabId}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        variant="scrollable"
      >
        {navPathArr.map((item, key) => <Tab key={key} label={item[0]} />)}
      </Tabs>
    </Paper>
  );
};

Navigation.displayName = "Navigation";
Navigation.propTypes = {
  history: PropTypes.object,
  className: PropTypes.string,
};
Navigation.defaultProps = {
  history: {},
  className: "",
};

export default styled(withRouter(Navigation))`${styles}`;
