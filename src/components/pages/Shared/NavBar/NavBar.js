import React from "react";
import { Nav, Navbar, Button } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import brandLogo from "../../../../images/logos/logo.png";

const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand>
        <NavLink to="/home">
          <img style={{ width: "200px" }} src={brandLogo} alt="" />
        </NavLink>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <NavLink
            to="/home"
            className="mr-5 text-dark text-decoration-none"
            activeStyle={{ borderBottom: "2px solid green" }}
          >
            Home
          </NavLink>
          <NavLink
            to="/portfolio"
            className="mr-5 text-dark"
            activeStyle={{ borderBottom: "1px solid green" }}
          >
            Our Portfolio
          </NavLink>
          <NavLink
            to="/team"
            className="mr-5 text-dark"
            activeStyle={{ borderBottom: "1px solid green" }}
          >
            Our Team
          </NavLink>
          <NavLink
            to="/contact"
            className="mr-5 text-dark"
            activeStyle={{ borderBottom: "1px solid green" }}
          >
            Contact Us
          </NavLink>
        </Nav>
        <Link to="/login">
          <Button className="btn-brand">Login</Button>
        </Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
