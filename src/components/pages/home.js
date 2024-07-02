import React, { Component } from 'react';
import "./pageDefaults.scss";
import { Container, Row, Col } from 'reactstrap';

class Home extends Component {
    render() {
        return (
            <div className="fade-in">
                <Container className="backgroundImageRichard">
                    <Row>
                        <Col>
                            <h1 className="display-3 slide-top">Hi I'm <span className="yellow">Richard</span></h1>
                            <p className="lead slide-right">Technology Professional Specializing in Full Stack Development</p>
                        </Col>
                    </Row>
                </Container>
                <div className="bg-dark text-white">
                    <Container >
                        <Row>
                            <Col>
                                <br />
                                <h2 className="display-4"> Who Am <span className="yellow">I</span>?</h2>
                                <p className="lead">A dedicated technology professional with a Bachelor of Engineering in Computer Engineering from Toronto Metropolitan University (formerly Ryerson University). With over five years of experience in full stack development, product management, and project management, I have a proven track record of delivering high-quality software solutions.
                                </p>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        );
    }
}

export default Home;
