import React from "react";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import Header from "../Header";
import Map from "../Map";
import ProfileForm from "../ProfileForm";

const Container = (props) => {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/map" component={Map} />
        <Route path="/profile" component={ProfileForm} />
      </Switch>
    </>
  );
};

export default connect()(Container);
