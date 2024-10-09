import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

const Navbar = ({ setIsLogin }) => {
  return (
    <nav className="navbar-main">
      <ul className="navbar-ul">
        <li className="navbar-li">
          <Link className="navbar-link" to="/">
            Home
          </Link>
        </li>
        <li className="navbar-li">
          <DropdownButton
            variant="light"
            id="dropdown-basic-button"
            title="Projects"
          >
            <Dropdown.Item as={Link} to="/projects/hello_world">
              Hello world
            </Dropdown.Item>
            <Dropdown.Item as={Link} to="/projects/crud_operation">
              CRUD
            </Dropdown.Item>
          </DropdownButton>
        </li>
        <li className="navbar-li">
          <Link
            className="navbar-link"
            to="/"
            onClick={() => setIsLogin(false)}
          >
            Logout
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
