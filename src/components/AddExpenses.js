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
    RegularIncome: "",
    Taxes: "",
    Insurance: "",
    Debts: "",
    Housing: "",
    Investing: "",
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
    this.props.addExpense(payload);
    this.setState({ open: false });
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (prevState.open !== this.state.open) {
      this.setState({
        RegularIncome: "",
        Taxes: "",
        Insurance: "",
        Debts: "",
        Housing: "",
        Investing: "",
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
                  id="RegularIncome"
                  placeholder="RegularIncome"
                  value={this.state.RegularIncome}
                  onChange={this.handleTextChange}
                  required
                />
                <TextField
                  id="Taxes"
                  placeholder="Taxes"
                  value={this.state.Taxes}
                  onChange={this.handleTextChange}
                  required
                />
                <TextField
                  id="Insurance"
                  placeholder="Insurance"
                  value={this.state.Insurance}
                  onChange={this.handleTextChange}
                  required
                />
                <TextField
                  id="Debts"
                  placeholder="Debts"
                  value={this.state.Debts}
                  onChange={this.handleTextChange}
                  required
                />
                <TextField
                  id="Housing"
                  placeholder="Housing"
                  value={this.state.Housing}
                  onChange={this.handleTextChange}
                  required
                />
                <TextField
                  id="Investing"
                  placeholder="Investing"
                  value={this.state.Investing}
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
