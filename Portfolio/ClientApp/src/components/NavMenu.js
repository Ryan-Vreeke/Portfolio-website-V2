import React, { Component } from 'react';
import { Collapse, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import './NavMenu.css';

export class NavMenu extends Component {
  static displayName = NavMenu.name;

  constructor (props) {
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

  render() {
    return (
      <header>
        <Navbar className="navbar-expand-sm navbar-dark bg-dark navbar-toggleable-sm ng-dark border-bottom box-shadow mb-0 navbar-custom">
          <a tag={Link} to="/" className='brand'>Ryan Vreeke</a>
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!this.state.collapsed} navbar>
            <ul className="navbar-nav flex-grow">
              <NavItem className='nav-item'>
                <NavLink tag={Link} className="text-white nav-link" to="/">Home</NavLink>
              </NavItem>
              <NavItem className='nav-item'>
                <NavLink tag={Link} className="text-white nav-link" to="/about">About</NavLink>
              </NavItem>
              <NavItem className='nav-item'>
                <NavLink tag={Link} className="text-white nav-link" to="/projects">Projects</NavLink>
              </NavItem>
            </ul>
          </Collapse>
        </Navbar>
      </header>
    );
  }
}
