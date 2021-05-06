import React, { Component, useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Container,
  Dropdown
} from 'reactstrap';
import { Link } from 'react-router-dom';
import './NavMenu.css';
import { IProps } from '../datasources/IProps';
import { IUser } from '../datasources/IUser';
import { LoggerInUser } from './loggedInUser';

interface INavMenuState{
  collapsed: boolean;
}

export class NavMenu extends Component<IProps, INavMenuState> {
  static displayName = NavMenu.name;

  constructor (props: IProps) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar () {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render () {
    
    return (
      <header>
         <div>
          <Navbar color="light" light expand="md" className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3">
          <Container>
            <NavbarBrand href="/">Customer Portal</NavbarBrand>
            <NavbarToggler onClick={this.toggleNavbar} />
            <Collapse isOpen={!this.state.collapsed} navbar>
              <Nav className="mr-auto" navbar>
                <NavItem>
                  <NavLink href="/">Home</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/dashboard">Dashboard</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/users">Users</NavLink>
                </NavItem>

              </Nav>
              <ShowLogin />
            </Collapse>
          </Container>
          </Navbar>
        </div>

      </header>
    );
  }
}

function ShowLogin() {
  if (localStorage.length == 0) return (
    <ul className="navbar-nav flex-grow">
      <NavItem className="nav-item">
        <NavLink tag={Link} className="nav-link" to="/login">Login</NavLink>
      </NavItem>
      <NavItem className="nav-item">
        <NavLink tag={Link} className="nav-link" to="/signup">Signup</NavLink>
      </NavItem>
    </ul>
  );

  var user: IUser = JSON.parse(localStorage.getItem('user') ?? "");
  return (    
    <Nav className="mr-right" navbar>
    <UncontrolledDropdown nav inNavbar>
    <DropdownToggle nav caret>
      Signed in as: <a href="#">{ user.lastName }, { user.firstName }</a>
    </DropdownToggle>
    <DropdownMenu right>
      <DropdownItem>
        Profile
      </DropdownItem>
      <DropdownItem divider />
      <DropdownItem>
        <NavLink tag={Link} className="nav-link" to="/login">Logout</NavLink>
      </DropdownItem>
    </DropdownMenu>
  </UncontrolledDropdown>
  </Nav>
  );
}