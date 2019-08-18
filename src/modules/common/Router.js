import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Navigation from 'modules/common/Navigation';
import Home from 'modules/Home';
import Education from 'modules/Education';
import Experience from 'modules/Experience';
import Product from 'modules/Product';
import Capability from 'modules/Capability';
import Solution from 'modules/Solution';
import Nlp from 'modules/Nlp';
import AboutMe from 'modules/AboutMe';

const Router = () => {
  return (
    <>
      <Navigation />
      <div className="mainbody">
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/home' component={Home} />
          <Route path={['/education/:subject', '/education']}
            render={(props) =>
              <Education
                title="Education"
                description="This is Education Page"
                {...props}
              />} />
          <Route path='/experience' component={Experience} />
          <Route path={['/product/:activedemo', '/product']} component={Product} />
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
