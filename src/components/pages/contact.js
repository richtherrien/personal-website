import React, { Component } from "react";
import { Container } from "reactstrap";

class Contact extends Component {
    render() {
        return (
            <div className="container-fluid full-height">
                <Container>
                    <h1 className="display-4">Contact Me</h1>
                    <p>
                        Send me a message via&nbsp;
                        <a href="https://www.linkedin.com/in/richard-therrien/">
                            LinkedIn.
                        </a>
                    </p>
                </Container>
            </div>
        );
    }
}

export default Contact;
