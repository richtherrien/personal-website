import React, { Component } from "react";
import { Navbar, NavLink } from "reactstrap";
import { FaLinkedin, FaGithub, FaMagnet } from "react-icons/fa";
import "./../../variables.scss";

class Footer extends Component {
    render() {
        return (
            <footer>
                <div>
                    <Navbar className="bg-dark text-light" expand="md">
                        <FaLinkedin />
                        <NavLink href="https://www.linkedin.com/in/richard-therrien/">
                            <span className="footer-navigation-text">
                                LinkedIn&nbsp;
                            </span>
                        </NavLink>
                        <FaGithub />
                        <NavLink href="https://github.com/richtherrien">
                            <span className="footer-navigation-text">
                                GitHub&nbsp;
                            </span>
                        </NavLink>
                    </Navbar>
                </div>
            </footer>
        );
    }
}

export default Footer;
