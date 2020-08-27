import React, { Component } from 'react';
import "./pageDefaults.scss";
import { Container, Row, Col } from 'reactstrap';
import Carousel from '../carousel';

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
                                <p className="lead">A dedicated and committed engineering graduate with development and technical skills. Aiming for an opportunity to utilize my abilities.
                                </p>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <br />
                                <h2 className="display-4"> Previous Project</h2>
                                <p className="lead">While working at Healthy Pets I had the opportunity to work with the Ionic framework to update the company’s cross-platform hybrid mobile app using JavaScript, HTML, and CSS to create a new UX/UI and backend based on mockups. </p>
                                <p className="lead">Here are the screenshots of the various pages I worked on. </p>
                                <br />
                            </Col>
                        </Row>
                        <Carousel />
                    </Container>
                </div>

            </div>
        );
    }
}

export default Home;
