import React from "react";
import { Switch, Route, Redirect } from "react-router";
import Dashboard from "./container/Dashboard";
import cookie from "cookie";
import Login from "./container/Login";
import Biz from "./container/Biz";
// Write component imports here //

// Start Router function here //
const checkAuth = () => {
  const cookies = cookie.parse(document.cookie);
  return cookies["loggedIn"] ? true : false;
};
// Check the cookies for a cookie called "loggedIn"

// Write ProtectedRoute function here
const ProtectedRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        checkAuth() ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

const Router = () => {
  return (
    <Switch>
      <div>
        <Route path="/login" component={Login} />
        <Route path="/biz/:id" component={Biz} />
        <Route exact path="/" component={Dashboard} />
      </div>
    </Switch>
  );
};

export default Router;
