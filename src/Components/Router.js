import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import Header from "./Header";
import Dog from "Routes/Dog";
import Favorite from "Routes/Favorite";
import Cat from "Routes/Cat";

export default () => (
  <Router>
    <>
      <Header />
      <Switch>
        <Route path="/" exact component={Dog} />
        <Route path="/cat" exact component={Cat} />
        <Route path="/favorite" component={Favorite} />
        <Redirect from="*" to="/" />
      </Switch>
    </>
  </Router>
);
