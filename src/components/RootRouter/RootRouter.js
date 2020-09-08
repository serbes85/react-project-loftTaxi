import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import PrivateRoute from "../PrivateRoute";
import LoginForm from "../LoginForm";
import Container from "../Container";

export default () => (
  <BrowserRouter>
    <Switch>
      <Route path="/login" component={LoginForm} />
      <PrivateRoute path="/" component={Container} />
      <Redirect to="/login" />
    </Switch>
  </BrowserRouter>
);
