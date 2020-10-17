import React, { useContext } from "react";
import { Nav, Navbar, Button } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../../App";
import brandLogo from "../../../../images/logos/logo.png";

const NavBar = () => {
  const [loggedInUser] = useContext(AuthContext);

  return (
    <Navbar expand="lg mx-5">
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
          <a href="#portfolio" className="mr-5 text-dark text-decoration-none">
            Our Portfolio
          </a>
          <a href="#team" className="mr-5 text-dark text-decoration-none">
            Our Team
          </a>
          <a href="#contact" className="mr-5 text-dark text-decoration-none">
            Contact Us
          </a>
          {!loggedInUser ? (
            <Link to="/login">
              <Button className="btn-brand">Login</Button>
            </Link>
          ) : (
            <p className="text-primary">{loggedInUser.name}</p>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
