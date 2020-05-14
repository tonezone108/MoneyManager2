import React, { Component, Fragment } from "react";
import {
  Button,
  TextField,
  Dialog,
  DialogContent,
  DialogTitle,
} from "@material-ui/core";

class AddAllocation extends Component {
  state = {
    open: false,
    EarnedIncome: "",
    Groceries: "",
    Transport: "",
    Leisure: "",
    Luxuries: "",
    userName: "",
  };

  toggleDialog = () => this.setState({ open: !this.state.open });

  handleTextChange = (e) => {
    const newState = { ...this.state };
    newState[e.target.id] = e.target.value;
    this.setState(newState);
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const payload = { ...this.state };
    // payload.id = this.props.bizTotal + 1;
    delete payload.open;
    console.log("THE Allocation", payload);
    // add this.props.addCar function here
    // also add this.setState to close the dialog
    this.props.createAllocation(payload);
    this.setState({ open: false });
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (prevState.open !== this.state.open) {
      this.setState({
        EarnedIncome: "",
        Groceries: "",
        Transport: "",
        Leisure: "",
        Luxuries: "",
        userName: this.props.user.userName,
      });
    }
  };

  render() {
    return (
      <Fragment>
        <div style={{ textAlign: "center" }}>
          <Button
            variant="contained"
            className="add-allocation"
            onClick={this.toggleDialog}
          >
            Add Allocation
          </Button>
        </div>
        <div>
          <Dialog open={this.state.open} onClose={this.toggleDialog}>
            <DialogTitle>Add Allocation</DialogTitle>
            <DialogContent>
              <form
                onSubmit={this.handleSubmit}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "350px",
                }}
              >
                <TextField
                  id="earnedIncome"
                  placeholder="EarnedIncome"
                  value={this.state.earnedIncome}
                  onChange={this.handleTextChange}
                  required
                />
                <TextField
                  id="groceries"
                  placeholder="Groceries"
                  value={this.state.groceries}
                  onChange={this.handleTextChange}
                  required
                />
                <TextField
                  id="transport"
                  placeholder="Transport"
                  value={this.state.transport}
                  onChange={this.handleTextChange}
                  required
                />
                <TextField
                  id="leisure"
                  placeholder="Leisure"
                  value={this.state.leisure}
                  onChange={this.handleTextChange}
                  required
                />
                <TextField
                  id="luxuries"
                  placeholder="Luxuries"
                  value={this.state.luxuries}
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

export default AddAllocation;
