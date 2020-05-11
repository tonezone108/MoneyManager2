import React, { Component } from "react";
import { Redirect } from "react-router";
import {
  TextField,
  Button,
  Container,
  Dialog,
  DialogContent,
  DialogTitle,
} from "@material-ui/core";

class App extends Component {
  state = {
    userName: "",
    userPassword: "",
    redirect: false,
  };

  toggleDialog = () => this.setState({ open: !this.state.open });

  handleTextChange = (e) => {
    const state = { ...this.state };
    state[e.target.name] = e.target.value;
    this.setState(state);
  };

  // getExpenses = (e) => {
  //   e.preventDefault();

  //   const userObject = {
  //     userName: this.state.userName,
  //   };
  //   this.props.getUserExpenses(userObject);
  // };

  // getAllocation = (e) => {
  //   e.preventDefault();

  //   const userObject = {
  //     userName: this.state.userName,
  //   };
  //   this.props.getUserAllocation(userObject);
  // };

  login = (e) => {
    e.preventDefault();
    // this needs to finish before running the next piece type async, to create await for a certain line  google async await  document.cookie = "loggedIn=true;max-age=20*1000";
    // window.location.replace("/"); //////////////////////////
    const userObject = {
      userName: this.state.userName,
      userPassword: this.state.userPassword,
    };

    this.props.loginUser(userObject);
  };

  createAccount = (e) => {
    //choppy but it manages to reach the backend
    const userObject = {
      userName: this.state.userName,
      userPassword: this.state.userPassword,
    };
    e.preventDefault();
    this.props.addUser(userObject);
    if (this.props.user.userName !== "") {
      console.log("THIS IS THE RESPONSE " + this.props.user.userName);
    } else {
      console.log(this.props.user.userName);
    }
  };
  componentDidUpdate() {
    //lifecycle function google it for reference, + componentDidUpdate

    if (this.props.user.userName !== "") {
      console.log("THIS IS THE RESPONSE " + this.props.user.userName);
      document.cookie = "loggedIn=true;max-age=20*1000";
      this.setState({ redirect: true }); //leave this alone.
    } else {
      console.log(this.props.user.userName);
    }
  }
  render() {
    const { redirect } = this.state;
    if (redirect) {
      return <Redirect to="/" />;
    }
    return (
      <div className="App">
        <Container maxWidth="sm">
          <h1>Enter credentials to login</h1>
          <form
            className="login-form"
            onSubmit={this.login} //, this.getExpenses, this.getAllocation  <-- Put these into the onSubmit
          >
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
              type="password"
            />
            <Button
              type="submit"
              className="login-button"
              variant="contained"
              color="primary"
            >
              Login
            </Button>
            <br />
            <Button
              variant="contained"
              className="add-user"
              onClick={this.toggleDialog}
            >
              Sign Up
            </Button>
          </form>
          <div>
            <Dialog open={this.state.open} onClose={this.toggleDialog}>
              <DialogTitle>Create Account</DialogTitle>
              <DialogContent>
                <form
                  onSubmit={this.createAccount}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "350px",
                  }}
                >
                  <TextField
                    id="userName"
                    placeholder="User Name"
                    value={this.state.userName}
                    onChange={this.handleTextChange}
                    name="userName"
                    label="Name"
                    type="text"
                    required
                  />
                  <TextField
                    id="userPassword"
                    placeholder="User Password"
                    value={this.state.address}
                    onChange={this.handleTextChange}
                    name="userPassword"
                    label="Password"
                    type="password"
                    required
                  />
                  <br />
                  <Button variant="contained" color="primary" type="submit">
                    Submit
                  </Button>
                </form>
              </DialogContent>
            </Dialog>
          </div>
        </Container>
      </div>
    );
  }
}

export default App;
