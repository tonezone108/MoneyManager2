import React, { Component } from "react";
import { Redirect } from "react-router";
import { TextField, Button, Container } from "@material-ui/core";

class App extends Component {
  state = {
    userName: "",
    userPassword: "",
    redirect: false,
  };

  handleTextChange = (e) => {
    const state = { ...this.state };
    state[e.target.name] = e.target.value;
    this.setState(state);
  };

  login = (e) => {
    const userObject = {
      userName: this.state.userName,
      userPassword: this.state.userPassword,
    };
    e.preventDefault();
    // set cookie here
    // set loggedIn = true and max-age = 60*1000 (one minute)

    const response = this.props.loginUser(userObject);
    // window.location.replace("/"); //////////////////////////

    if (response.type === "LOGIN") {
      console.log("THIS IS THE RESPONSE " + response.type);
      document.cookie = "loggedIn=true;max-age=60*1000";
      this.setState({ redirect: true });
    } else {
      console.log(response.type);
    }
  };

  render() {
    const { redirect } = this.state;
    if (redirect) {
      return <Redirect to="/" />;
    }
    return (
      <div className="App">
        <Container maxWidth="sm">
          <h1>Enter credentials to login</h1>
          <form className="login-form" onSubmit={this.login}>
            <TextField
              required
              onChange={this.handleTextChange}
              value={this.state.userName}
              name="userName"
              label="Name"
              type="text"
            />
            <TextField
              required
              onChange={this.handleTextChange}
              value={this.state.userPassword}
              name="userPassword"
              label="Password"
              type="userPassword"
            />
            <Button
              type="submit"
              className="login-button"
              variant="contained"
              color="primary"
            >
              Login
            </Button>
          </form>
        </Container>
      </div>
    );
  }
}

export default App;
