import React, { props } from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";

const defaultUser = {
  userName: false,
};

const HandleLogin = (props) => {
  console.log(props, "Is handleLogin working?");
  if (!props.user.userName) {
    return (
      <a href="/login">
        <Button>Login</Button>
      </a>
    );
  } else {
    return (
      <a href="/login">
        <Button onClick={() => props.logoutUser(defaultUser)}>Logout</Button>
      </a>
    );
  }
};

export default HandleLogin;
