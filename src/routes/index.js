import React from "react";
import {Route, Switch} from "react-router-dom";

import asyncComponent from "util/asyncComponent";

const App = ({match}) => (
  <div className="gx-main-content-wrapper">
    <Switch>
      <Route path={`${match.url}`} component={asyncComponent(() => import('../screens/Splash'))}/>
      <Route path={`${match.url}sample`} component={asyncComponent(() => import('./main/dashboard/SamplePage'))}/>
      <Route path={`${match.url}about-us`} component={asyncComponent(() => import('./main/dashboard/AboutUs/index'))} />
      <Route path={`${match.url}home`} component={asyncComponent(() => import('./main/dashboard/Home/index'))} />
      <Route path={`${match.url}my-projects`} component={asyncComponent(() => import('./main/dashboard/MyProjects'))} />
      <Route path={`${match.url}my-profile`} component={asyncComponent(() => import('./main/dashboard/MyProfile'))} />
      <Route path={`${match.url}store`} component={asyncComponent(() => import('./main/dashboard/Store'))} />
      <Route path={`${match.url}exchange`} component={asyncComponent(() => import('./main/dashboard/Exchange'))} />
    </Switch>
  </div>
);

export default App;
