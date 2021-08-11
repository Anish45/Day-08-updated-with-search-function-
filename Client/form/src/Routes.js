import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Display from "./Display";
import Form from "./Form"


const Routes = () => {
  return (
    <Router>
      <Route>
        <Switch>
          <Route path="/display" component={Display} />
          <Route path="/" component={Form} />
        </Switch>
      </Route>
    </Router>
  );
};

export default Routes;