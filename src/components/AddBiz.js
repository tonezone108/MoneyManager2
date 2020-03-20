import React, { Component, Fragment } from "react";
import {
  Button,
  TextField,
  Dialog,
  DialogContent,
  DialogTitle
} from "@material-ui/core";

class AddBiz extends Component {
  state = {
    open: false,
    name: "",
    address: "",
    hours: "",
    description: ""
  };

  toggleDialog = () => this.setState({ open: !this.state.open });

  handleTextChange = e => {
    const newState = { ...this.state };
    newState[e.target.id] = e.target.value;
    this.setState(newState);
  };

  handleSubmit = e => {
    e.preventDefault();
    const payload = { ...this.state };
    payload.id = this.props.bizTotal + 1;
    delete payload.open;
    console.log("THE BIZ", payload);
    // add this.props.addCar function here
    // also add this.setState to close the dialog
    this.props.addBiz(payload);
    this.setState({ open: false });
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (prevState.open !== this.state.open) {
      this.setState({
        name: "",
        address: "",
        hours: "",
        description: ""
      });
    }
  };

  render() {
    return (
      <Fragment>
        <div style={{ textAlign: "center" }}>
          <h1>Add Business:</h1>
          <Button
            variant="contained"
            className="add-biz"
            onClick={this.toggleDialog}
          >
            Add Business
          </Button>
        </div>
        <div>
          <Dialog open={this.state.open} onClose={this.toggleDialog}>
            <DialogTitle>Add New Business</DialogTitle>
            <DialogContent>
              <form
                onSubmit={this.handleSubmit}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "350px"
                }}
              >
                <TextField
                  id="name"
                  placeholder="Name"
                  value={this.state.name}
                  onChange={this.handleTextChange}
                  required
                />
                <TextField
                  id="address"
                  placeholder="address"
                  value={this.state.address}
                  onChange={this.handleTextChange}
                  required
                />
                <TextField
                  id="hours"
                  placeholder="hours"
                  value={this.state.hours}
                  onChange={this.handleTextChange}
                  required
                />
                <TextField
                  id="description"
                  placeholder="description"
                  value={this.state.description}
                  onChange={this.handleTextChange}
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
      </Fragment>
    );
  }
}

export default AddBiz;
