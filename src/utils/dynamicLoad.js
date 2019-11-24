import React from 'react';
import Loadable from 'react-loadable';
import { LoadingIndicator } from 'components';

export function dynamicLoad(path) {
  return Loadable({
    loader: () => import(path),
    // eslint-disable-next-line react/display-name
    loading: () => <LoadingIndicator />,
  });
}