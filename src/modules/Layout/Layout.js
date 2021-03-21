import React from "react";
import { Route, Switch } from "react-router";
import Assignment from "../Assignment/Assignment";

const Layout = () => {
  return (
    <Switch>
      <Route path="/" exact component={Assignment} />
    </Switch>
  );
};

export default Layout;
