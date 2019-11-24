import React, { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import Navigation from 'modules/common/Navigation';
import Footer from 'modules/common/Footer';
const Home = React.lazy(() => import('modules/Home'));
const Education = React.lazy(() => import('modules/Education'));
const Experience = React.lazy(() => import('modules/Experience'));
const Product = React.lazy(() => import('modules/Product'));
const Capability = React.lazy(() => import('modules/Capability'));
const Nlp = React.lazy(() => import('modules/Nlp'));
const AboutMe = React.lazy(() => import('modules/AboutMe'));
import Paths from 'shared/routePaths';
import metaData from 'shared/metaData';
import { Body, LoadingIndicator } from 'components';

const Router = () => {
  return (
    <>
      <Navigation />
      <Body>
        <Suspense fallback={<LoadingIndicator height="400px" />}>
          <Switch>
            <Route exact path={Paths.ROOT} render={(props) =>
              <Home
                {...metaData.ROOT}
                {...props}
              />} />
            <Route path={[`${Paths.HOME}/:activedemo`, Paths.HOME]} render={(props) =>
              <Home
                {...metaData.HOME}
                {...props}
              />} />
            <Route path={[`${Paths.EDUCATION}/:subject`, Paths.EDUCATION]} render={(props) =>
              <Education
                {...metaData.EDUCATION}
                {...props}
              />} />
            <Route path={Paths.EXPERIENCE} render={(props) =>
              <Experience
                {...metaData.EXPERIENCE}
                {...props}
              />} />
            <Route path={[
              `${Paths.PRODUCT}/:subject/:activedemo`,
              `${Paths.PRODUCT}/:subject`,
              Paths.PRODUCT
            ]} render={(props) =>
              <Product
                {...metaData.PRODUCT}
                {...props}
              />} />
            <Route path={Paths.CAPABILITY} render={(props) =>
              <Capability
                {...metaData.CAPABILITY}
                {...props}
              />} />
            <Route path={Paths.NLP} render={(props) =>
              <Nlp
                {...metaData.NLP}
                {...props}
              />} />
            <Route path={Paths.ABOUTME} render={(props) =>
              <AboutMe
                {...metaData.ABOUTME}
                {...props}
              />} />
            <Route path="*" />
          </Switch>
        </Suspense>
      </Body>
      <Footer />
    </>
  );
};

export default Router;
