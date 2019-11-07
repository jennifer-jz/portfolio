import React from 'react';
import { Tabs as MaterialTabs } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { BLUE } from 'shared/styles';

const Tabs = withStyles({
  indicator: {
    backgroundColor: BLUE,
  },
})(props => <MaterialTabs {...props} />);

export default Tabs;
