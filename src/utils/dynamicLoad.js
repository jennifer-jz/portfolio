import React from 'react';
import Loadable from 'react-loadable';

export function dynamicLoad(path) {
  return Loadable({
    loader: () => import(path),
    loading() {
      return (<div>Loading...</div>);
    },
  });
}