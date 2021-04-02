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
                            <p className="lead slide-right">Computer Engineering Graduate <br /> Ryerson University</p>
                        </Col>
                    </Row>
                </Container>
                <div className="bg-dark text-white">
                    <Container >
                        <Row>
                            <Col>
                                <br />
                                <h2 className="display-4"> Who Am <span className="yellow">I</span>?</h2>
                                <p className="lead">A university graduate with a Bachelor of Engineering in Computer Engineering and currently working as a Full Stack Developer.
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
