import React, { Component } from "react";
import {
  Grid,
  Switch,
  Slider,
  MenuItem,
  Select,
  InputLabel,
  Typography,
  Card,
  CardActions,
  CardContent,
  makeStyles,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody
} from "@material-ui/core";
import { Link } from "react-router-dom";
import DeleteIcon from "@material-ui/icons/Delete";
import AddBiz from "../container/AddBiz";

class Dashboard extends Component {
  render() {
    return (
      <div>
        <div>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell align="left">Name</TableCell>
                <TableCell align="left">Description</TableCell>
                <TableCell align="left">Hours</TableCell>
                <TableCell align="left">Address</TableCell>
                <TableCell align="left">
                  {this.props.user.username && (
                    <AddBiz bizTotal={this.props.biz.length} />
                  )}
                </TableCell>
              </TableRow>
            </TableHead>
            {this.props.biz.map((biz, index) => (
              <TableBody>
                <TableRow key={biz.id}>
                  <TableCell align="left">
                    <Link to={`/biz/${biz.id}`}>{biz.name}</Link>
                  </TableCell>
                  <TableCell align="left">{biz.description}</TableCell>
                  <TableCell align="left">{biz.hours}</TableCell>
                  <TableCell align="left">{biz.address}</TableCell>

                  <TableCell align="left">
                    {this.props.user.username && (
                      <button onClick={() => this.props.removeBiz(index)}>
                        DELETE
                      </button>
                    )}
                  </TableCell>
                </TableRow>
                {/*  */}
              </TableBody>
            ))}
          </Table>

          <br />

          <Table>
            <TableHead>
              <h1>Income and Expenses</h1>
            </TableHead>
            <TableBody>
              <TableCell>
                <TableRow align="left">
                  <p style={{ paddingLeft: 60 }}>
                    <b>RegularIncome</b>{" "}
                    <b style={{ align: "right" }}>: XXXX</b>
                  </p>
                </TableRow>
                <TableRow align="left">
                  <p style={{ paddingLeft: 60 }}>
                    <b>Taxes</b> <b style={{ align: "right" }}>: XXXX</b>
                  </p>
                </TableRow>
                <TableRow align="left">
                  <p style={{ paddingLeft: 60 }}>
                    <b>Insurance</b> <b style={{ align: "right" }}>: XXXX</b>
                  </p>
                </TableRow>
                <TableRow align="left">
                  <p style={{ paddingLeft: 60 }}>
                    <b>Debts</b> <b style={{ align: "right" }}>: XXXX</b>
                  </p>
                </TableRow>
                <TableRow align="left">
                  <p style={{ paddingLeft: 60 }}>
                    <b>Housing</b> <b style={{ align: "right" }}>: XXXX</b>
                  </p>
                </TableRow>
                <TableRow align="left">
                  <p style={{ paddingLeft: 60 }}>
                    <b>Investing</b> <b style={{ align: "right" }}>: XXXX</b>
                  </p>
                </TableRow>
              </TableCell>
            </TableBody>

            <TableRow align="left">
              <p>Remaining Income : $xxxx</p> <button>Add Expenses </button>
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
                    <b style={{ align: "right" }}>: XXXX</b>
                  </p>
                </TableRow>

                <TableRow align="left">
                  <p style={{ paddingLeft: 60 }}>
                    <b>Groceries</b> <b style={{ align: "right" }}>: XXXX</b>
                  </p>
                </TableRow>
                <TableRow align="left">
                  <p style={{ paddingLeft: 60 }}>
                    <b>Transport</b> <b style={{ align: "right" }}>: XXXX</b>
                  </p>
                </TableRow>
                <TableRow align="left">
                  <p style={{ paddingLeft: 60 }}>
                    <b>Leisure</b> <b style={{ align: "right" }}>: XXXX</b>
                  </p>
                </TableRow>
                <TableRow align="left">
                  <p style={{ paddingLeft: 60 }}>
                    <b>Luxuries</b> <b style={{ align: "right" }}>: XXXX</b>
                  </p>
                </TableRow>
              </TableCell>
            </TableBody>
            <TableRow align="left">
              <p>Remaining Savings : $xxxx</p>{" "}
              <button>Create Allocation</button>
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
