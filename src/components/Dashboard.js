import React, { Component } from "react";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import AddExpenses from "../container/AddExpenses";
import AddAllocation from "../container/AddAllocation";

class Dashboard extends Component {
  componentDidMount() {
    this.props.getUserExpenses(this.props.user);
    this.props.getUserAllocation(this.props.user);
  }
  //let this go to heroku, let this go to heroku
  render() {
    return (
      <div>
        <div>
          <Table>
            <TableHead>
              <h1>Income and Expenses</h1>
            </TableHead>

            {/* {props.user.username} */}

            <TableBody>
              <TableCell>
                <TableRow align="left">
                  <p style={{ paddingLeft: 60 }}>
                    <b>RegularIncome</b>{" "}
                    <b style={{ align: "right" }}>
                      : ${this.props.incomeExpenses.regularIncome}
                    </b>
                  </p>
                </TableRow>
                <TableRow align="left">
                  <p style={{ paddingLeft: 60 }}>
                    <b>Taxes</b>{" "}
                    <b style={{ align: "right" }}>
                      : ${this.props.incomeExpenses.taxes}
                    </b>
                  </p>
                </TableRow>
                <TableRow align="left">
                  <p style={{ paddingLeft: 60 }}>
                    <b>Insurance</b>{" "}
                    <b style={{ align: "right" }}>
                      : ${this.props.incomeExpenses.insurance}
                    </b>
                  </p>
                </TableRow>
                <TableRow align="left">
                  <p style={{ paddingLeft: 60 }}>
                    <b>Debts</b>{" "}
                    <b style={{ align: "right" }}>
                      : ${this.props.incomeExpenses.debts}
                    </b>
                  </p>
                </TableRow>
                <TableRow align="left">
                  <p style={{ paddingLeft: 60 }}>
                    <b>Housing</b>{" "}
                    <b style={{ align: "right" }}>
                      : ${this.props.incomeExpenses.housing}
                    </b>
                  </p>
                </TableRow>
                <TableRow align="left">
                  <p style={{ paddingLeft: 60 }}>
                    <b>Investing</b>{" "}
                    <b style={{ align: "right" }}>
                      : ${this.props.incomeExpenses.investing}
                    </b>
                  </p>
                </TableRow>
              </TableCell>
            </TableBody>

            <TableRow align="left">
              <p>
                Remaining Income : $
                {this.props.incomeExpenses.regularIncome -
                  this.props.incomeExpenses.taxes -
                  this.props.incomeExpenses.insurance -
                  this.props.incomeExpenses.debts -
                  this.props.incomeExpenses.housing -
                  this.props.incomeExpenses.investing}{" "}
              </p>{" "}
              <AddExpenses />
            </TableRow>

            <br />
            <TableHead>
              <h1>Income Allocation</h1>
            </TableHead>
            <TableBody>
              <TableCell>
                <TableRow align="left">
                  <p style={{ paddingLeft: 60 }}>
                    <b>Earned Income</b>{" "}
                    <b style={{ align: "right" }}>
                      : ${this.props.incomeAllocation.earnedIncome}
                    </b>
                  </p>
                </TableRow>

                <TableRow align="left">
                  <p style={{ paddingLeft: 60 }}>
                    <b>Groceries</b>{" "}
                    <b style={{ align: "right" }}>
                      : ${this.props.incomeAllocation.groceries}
                    </b>
                  </p>
                </TableRow>
                <TableRow align="left">
                  <p style={{ paddingLeft: 60 }}>
                    <b>Transport</b>{" "}
                    <b style={{ align: "right" }}>
                      : ${this.props.incomeAllocation.transport}
                    </b>
                  </p>
                </TableRow>
                <TableRow align="left">
                  <p style={{ paddingLeft: 60 }}>
                    <b>Leisure</b>{" "}
                    <b style={{ align: "right" }}>
                      : ${this.props.incomeAllocation.leisure}
                    </b>
                  </p>
                </TableRow>
                <TableRow align="left">
                  <p style={{ paddingLeft: 60 }}>
                    <b>Luxuries</b>{" "}
                    <b style={{ align: "right" }}>
                      : ${this.props.incomeAllocation.luxuries}
                    </b>
                  </p>
                </TableRow>
              </TableCell>
            </TableBody>
            <TableRow align="left">
              <p>
                Remaining Savings : $
                {this.props.incomeAllocation.earnedIncome -
                  this.props.incomeAllocation.groceries -
                  this.props.incomeAllocation.transport -
                  this.props.incomeAllocation.leisure -
                  this.props.incomeAllocation.luxuries}
              </p>{" "}
              <AddAllocation />
            </TableRow>
          </Table>
        </div>
      </div>
    );
  }
}

export default Dashboard;
