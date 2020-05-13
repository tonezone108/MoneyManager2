import React, { Component, Fragment } from "react";
import {
  Button,
  TextField,
  Dialog,
  DialogContent,
  DialogTitle,
} from "@material-ui/core";

class AddExpenses extends Component {
  state = {
    open: false,
    regularIncome: "",
    taxes: "",
    insurance: "",
    debts: "",
    housing: "",
    investing: "",
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
    console.log("THE Expense", payload);
    // add this.props.addCar function here
    // also add this.setState to close the dialog
    this.props.createExpense(payload);
    this.setState({ open: false });
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (prevState.open !== this.state.open) {
      this.setState({
        regularIncome: "",
        taxes: "",
        insurance: "",
        debts: "",
        housing: "",
        investing: "",
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
            className="add-expense"
            onClick={this.toggleDialog}
          >
            Add Expenses
          </Button>
        </div>
        <div>
          <Dialog open={this.state.open} onClose={this.toggleDialog}>
            <DialogTitle>Add Expenses</DialogTitle>
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
                  id="regularIncome"
                  placeholder="RegularIncome"
                  value={this.state.regularIncome}
                  onChange={this.handleTextChange}
                  required
                />
                <TextField
                  id="taxes"
                  placeholder="Taxes"
                  value={this.state.taxes}
                  onChange={this.handleTextChange}
                  required
                />
                <TextField
                  id="insurance"
                  placeholder="Insurance"
                  value={this.state.insurance}
                  onChange={this.handleTextChange}
                  required
                />
                <TextField
                  id="debts"
                  placeholder="Debts"
                  value={this.state.debts}
                  onChange={this.handleTextChange}
                  required
                />
                <TextField
                  id="housing"
                  placeholder="Housing"
                  value={this.state.housing}
                  onChange={this.handleTextChange}
                  required
                />
                <TextField
                  id="investing"
                  placeholder="Investing"
                  value={this.state.investing}
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

export default AddExpenses;
