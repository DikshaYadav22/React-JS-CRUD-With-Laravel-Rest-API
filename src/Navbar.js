import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">PaintSkyCoder</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/details">Profile</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/contact">Contact Us</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/details">Update</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
        <Nav className="mr-auto" navbar>
          <NavItem>
            <NavLink href="/contact">Add Details</NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
};

export default Example;
