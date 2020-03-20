import React, { props } from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";

const defaultUser = {
  username: false,
  password: false
};

const HandleLogin = props => {
  console.log(props);
  if (!props.user.username) {
    return (
      <a href="/login">
        <Button>Login</Button>
      </a>
    );
  } else {
    return (
      <Button onClick={() => props.logoutUser(defaultUser)}>Logout</Button>
    );
  }
};

export default HandleLogin;
