import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
const NoSearchNavbarComponent = (props) => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <NavLink to="/" className="navbar-brand">MovieApp</NavLink>

      </Container>
    </Navbar>
  );
};

export default NoSearchNavbarComponent;
