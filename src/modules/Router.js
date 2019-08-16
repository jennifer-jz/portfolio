import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';

const Router = () => {
    return (
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/home' component={Home} />
        {/* <Route path='/roster' component={Roster}/>
        <Route path='/schedule' component={Schedule}/> */}
      </Switch>
    );
};

export default Router;
