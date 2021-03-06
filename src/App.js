import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import Router from "./Router";
import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import HandleLogin from "./container/HandleLogin";

import { Button, AppBar, Toolbar } from "@material-ui/core";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <BrowserRouter>
            <AppBar style={{ background: "green" }} position="staic">
              <Toolbar>
                <h1>Money Manager App </h1>
              </Toolbar>
              <div align="left">
                <a href="/">
                  <Button>Home</Button>
                </a>
                <HandleLogin />
              </div>
            </AppBar>

            <Router />
          </BrowserRouter>
        </div>
      </Provider>
    );
  }
}

export default App;
