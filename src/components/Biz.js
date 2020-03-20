import React from "react";
import {
  Container,
  Paper,
  Chip,
  Table,
  TableHead,
  TableRow,
  TableContainer,
  TableCell,
  TableBody
} from "@material-ui/core";
//import cars from '../cars.json' // remove this

const Biz = props => {
  const id = props.match.params.id;
  {
    /* Change cars to props.cars and remove the cars.json import above */
  }
  const biz = props.biz.find(c => c.id == id);

  return (
    <Container maxWidth="sm" key={biz.id}>
      <h2 align="left">{biz.name}</h2>
      <h3 align="left">{biz.description}</h3>
      <h3 align="left">{biz.hours}</h3>
      <p align="left">{biz.address}</p>
      <h1>Google Goes Here</h1>
    </Container>
  );
};

export default Biz;
