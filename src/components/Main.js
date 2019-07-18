import React from 'react';
import Contact from './Contact';
import Resume from './Resume';
import Projects from './Projects';
import AboutMe from './Aboutme';
import LandingPage from './LandingPage';
import { Switch, Route } from 'react-router-dom';

const Main = () => (
  <Switch>
    <Route exact path='/home' component={LandingPage} />
    <Route path='/aboutme' component={AboutMe} />
    <Route path='/projects' component={Projects} />
    <Route path='/resume' component={Resume} />
    <Route path='/contact' component={Contact} />
  </Switch>
);

export default Main;
