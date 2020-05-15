import React from "react";
import { Container } from "@material-ui/core";

const Biz = (props) => {
  const id = props.match.params.id;

  const biz = props.biz.find((c) => c.id === id);

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
