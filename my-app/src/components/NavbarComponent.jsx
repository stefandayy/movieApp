import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import { NavLink } from "react-router-dom";
const NavbarComponent = (props) => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <NavLink to="/" className="navbar-brand">MovieApp</NavLink>
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
            value={props.value}
            onChange={props.handleSearch}
            onKeyDown={props.handleKeyDown}
          />
        </Form>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
