import React from 'react';
import { Tab as MaterialTab } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { BLUE } from 'shared/styles';

const Tab = withStyles({
  root: {
    '&:hover': {
      color: BLUE,
      opacity: 1,
    },
    '&:focus': {
      color: BLUE,
    },
  },
  selected: {
    color: BLUE,
  }
})(props => <MaterialTab {...props} disableRipple />);

export const SmallTab = withStyles({
  root: {
    minWidth: 0,
    '&:focus': {
      outline: 'none',
    }
  }
})(props => <Tab {...props}/>);

export default Tab;
