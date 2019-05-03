import React, { Component } from 'react';
import "./header.scss";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';
import logo from '../../logoRichard.jpg';

class Header extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <div>
                <Navbar light expand="md">
                    <NavbarBrand href="/"><img src={logo} alt="Logo" className="logo" /></NavbarBrand>
                    <NavbarBrand href="/">Richard Therrien</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="/about">About</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/contact">Contact</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/resume">Resume</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/skills">Skills</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}

export default Header;
