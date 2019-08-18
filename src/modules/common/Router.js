import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Navigation from './Navigation';
import Home from '../Home';
import Education from '../Education';
import Experience from '../Experience';
import Product from '../Product';
import Capability from '../Capability';
import Solution from '../Solution';
import Nlp from '../Nlp';
import AboutMe from '../AboutMe';

const Router = () => {
  return (
    <>
      <Navigation />
      <div className="mainbody">
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/home' component={Home} />
          <Route path='/education'
            render={(props) =>
              <Education
                title="Education"
                description="This is Education Page"
                {...props}
              />} />
          <Route path='/experience' component={Experience} />
          <Route path='/product' component={Product} />
          <Route path='/product/:activedemo' component={Product} />
          <Route path='/capability' component={Capability} />
          <Route path='/solution' component={Solution} />
          <Route path='/nlp' component={Nlp} />
          <Route path='/aboutme' component={AboutMe} />
        </Switch>
      </div>
    </>
  );
};

export default Router;
