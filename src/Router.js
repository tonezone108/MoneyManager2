import React from "react";
import { Switch, Route, Redirect } from "react-router";
import Dashboard from "./container/Dashboard";
import cookie from "cookie";
import Login from "./container/Login";
import Biz from "./container/Biz";

const checkAuth = () => {
  //can this be implemented in the login??????
  const cookies = cookie.parse(document.cookie);
  return cookies["loggedIn"] ? true : false;
};

const ProtectedRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
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
        <ProtectedRoute path="/biz/:id" component={Biz} />
        <ProtectedRoute exact path="/" component={Dashboard} />
      </div>
    </Switch>
  );
};

export default Router;
