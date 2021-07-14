import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

/* Pages Import */
import MobileGallery from "../pages/MobileGallery";
import NoMatch from "../pages/NoMatch";

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/">
        <MobileGallery />
      </Route>
      <Route path="*">
        <NoMatch />
      </Route>
    </Switch>
  </Router>
);

export default Routes;
