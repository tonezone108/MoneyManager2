import React, { Component } from "react";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import AddBiz from "../container/AddBiz";
import AddExpenses from "../container/AddExpenses";
import AddAllocation from "../container/AddAllocation";

class Dashboard extends Component {
  componentDidMount() {
    //call the load user data action here
    this.props.getUserExpenses(this.props.user);
    this.props.getUserAllocation(this.props.user);
  }

  render() {
    console.log("THIS IS THE PROPS --> ", this.props);
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
                      : {this.props.incomeExpenses.RegularIncome}
                    </b>
                  </p>
                </TableRow>
                <TableRow align="left">
                  <p style={{ paddingLeft: 60 }}>
                    <b>Taxes</b>{" "}
                    <b style={{ align: "right" }}>
                      : {this.props.incomeExpenses.Taxes}
                    </b>
                  </p>
                </TableRow>
                <TableRow align="left">
                  <p style={{ paddingLeft: 60 }}>
                    <b>Insurance</b>{" "}
                    <b style={{ align: "right" }}>
                      : {this.props.incomeExpenses.Insurance}
                    </b>
                  </p>
                </TableRow>
                <TableRow align="left">
                  <p style={{ paddingLeft: 60 }}>
                    <b>Debts</b>{" "}
                    <b style={{ align: "right" }}>
                      : {this.props.incomeExpenses.Debts}
                    </b>
                  </p>
                </TableRow>
                <TableRow align="left">
                  <p style={{ paddingLeft: 60 }}>
                    <b>Housing</b>{" "}
                    <b style={{ align: "right" }}>
                      : {this.props.incomeExpenses.Housing}
                    </b>
                  </p>
                </TableRow>
                <TableRow align="left">
                  <p style={{ paddingLeft: 60 }}>
                    <b>Investing</b>{" "}
                    <b style={{ align: "right" }}>
                      : {this.props.incomeExpenses.Investing}
                    </b>
                  </p>
                </TableRow>
              </TableCell>
            </TableBody>

            <TableRow align="left">
              <p>
                Remaining Income : $
                {this.props.incomeExpenses.RegularIncome -
                  this.props.incomeExpenses.Taxes -
                  this.props.incomeExpenses.Insurance -
                  this.props.incomeExpenses.Debts -
                  this.props.incomeExpenses.Housing -
                  this.props.incomeExpenses.Investing}{" "}
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
                      : {this.props.incomeAllocation.EarnedIncome}
                    </b>
                  </p>
                </TableRow>

                <TableRow align="left">
                  <p style={{ paddingLeft: 60 }}>
                    <b>Groceries</b>{" "}
                    <b style={{ align: "right" }}>
                      {this.props.incomeAllocation.Groceries}
                    </b>
                  </p>
                </TableRow>
                <TableRow align="left">
                  <p style={{ paddingLeft: 60 }}>
                    <b>Transport</b>{" "}
                    <b style={{ align: "right" }}>
                      : {this.props.incomeAllocation.Transport}
                    </b>
                  </p>
                </TableRow>
                <TableRow align="left">
                  <p style={{ paddingLeft: 60 }}>
                    <b>Leisure</b>{" "}
                    <b style={{ align: "right" }}>
                      : {this.props.incomeAllocation.Leisure}
                    </b>
                  </p>
                </TableRow>
                <TableRow align="left">
                  <p style={{ paddingLeft: 60 }}>
                    <b>Luxuries</b>{" "}
                    <b style={{ align: "right" }}>
                      : {this.props.incomeAllocation.Luxuries}
                    </b>
                  </p>
                </TableRow>
              </TableCell>
            </TableBody>
            <TableRow align="left">
              <p>
                Remaining Savings : $
                {this.props.incomeAllocation.EarnedIncome -
                  this.props.incomeAllocation.Groceries -
                  this.props.incomeAllocation.Transport -
                  this.props.incomeAllocation.Leisure -
                  this.props.incomeAllocation.Luxuries}
              </p>{" "}
              <AddAllocation />
            </TableRow>
          </Table>
          {/* <a id="login/logout" href="/Login">
              link text
            </a> */}
          {/* <p>{biz.name}</p> */}
        </div>
      </div>
    );
  }
}

export default Dashboard;

//REFER TO LAST THREE HOMEWORK ASSIGNMENTS FOR GUIDANCE
