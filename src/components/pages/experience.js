import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

class Experience extends Component {
    render() {
        return (
            <div className="container-fluid">
                <Container>
                    <h1 className="display-4">Education</h1>
                    <Row>
                        <Col md="12">
                            <h4>Ryerson University</h4></Col>
                        <Col>
                            <p>Bachelor of Engineering, Computer Engineering
                            </p>
                        </Col>
                        <Col className="text-md-right">  September 2015 - June 2020</Col>
                    </Row>

                    <h1 className="display-4">Work Experience</h1>
                    <Row>
                        <Col md="12">
                            <h4>PHP Developer</h4>
                        </Col>
                        <Col>
                            <a href='http://www.socialenterprise.ca/'>Social Enterprise for Canada</a>
                        </Col>
                        <Col className="text-md-right">  June 2019 - August 2019</Col>

                       
                            <ul>
                                <li>Worked with Vue.js and PHP to develop web applications to reduce administrative burdens as well as implementing data analytics and reporting.
                                </li>
                                <li>Implemented data validation to web applications to ensure accuracy and reliability.
                                </li>

                                <li>Created functions using stored SQL data to generate reports to display metrics on administrative dashboard.
                                </li>

                                <li>Updated role and routing permissions to allow users to perform certain actions in the web applications. 
                                </li>

                                <li>Improved security of web applications by implementing refresh tokens.
                                </li>
                            </ul>
                       
                    </Row>


                    <Row>
                        <Col md="12">
                            <h4>Software Engineer</h4>
                        </Col>
                        <Col>
                            <a href='https://www.healthypets.io'>Healthy Pets </a>
                        </Col>
                        <Col className="text-md-right">  January 2019- April 2019</Col>

                     
                            <ul>
                                <li>Created a video presence system using Python and CouchDB in a Docker container to detect the status
                                  of users in a video appointment. This provided peace of mind to staff as the status of the appointment
                                  is now displayed in a new section on the administrative dashboard.
                                </li>
                                <li>Used the Ionic framework to update the company’s cross-platform hybrid mobile app using JavaScript,
                                  HTML, and CSS to create a new UX/UI and backend based on mockups.
                                </li>

                                <li>Assisted in the development of the Laravel, a PHP framework, web platform using MVC design patterns.
                                </li>

                                <li>Created and updated RESTful APIs that integrated with the company’s web and mobile platforms.
                                </li>

                                <li>Used Kanban framework to implement Agile software development.
                                </li>
                            </ul>
                       
                    </Row>


                    <Row>
                        <Col md="12">
                            <h4>Junior Developer</h4>
                        </Col>
                        <Col>
                            <a href='https://startuptive.com'>Startuptive Inc.</a>
                        </Col>
                        <Col className="text-md-right">  September 2018 - December 2018</Col>
                       
                            <ul>
                                <li>Investigated the hardware and software architecture of Internet of Things based devices, developed
                                  firmware in C++ to fit the company’s needs.
                                </li>

                                <li>Developed an Android application to integrate with the hardware to create a demo product for
                                  showcasing to potential investors.
                                </li>

                                <li>Worked with MongoDB NoSQL database and SQLite for application data storage.
                                </li>

                                <li>Created RESTful APIs to interact with applications.
                                </li>

                                <li>Created technical documents and diagrams and conducted tests and experiments on the system.
                                </li>

                                <li>Conducted and scheduled in-person and phone interviews for applicants of other positions</li>
                            </ul>
                       

                    </Row>


                    <Row>
                        <Col md="12">
                            <h4>Junior IT Support Analyst</h4>
                        </Col>
                        <Col>
                            <a href='http://citronhygiene.com/'>Citron Hygiene</a>
                        </Col>
                        <Col className="text-md-right">  May 2018 - August 2018</Col>
                       
                            <ul>
                                <li>Provided administrative support, maintained inventory, updated the filing and other tracking
                                  systems.
                                </li>

                                <li>Responsible for implementing a system for E-Filing invoices to support metadata and a search
                                  function, reduced the time spent searching for these documents.
                                </li>

                                <li>Assisted in the development of the new phone routing plan for customer service in the company's
                                  western locations to improve the experience for incoming callers.
                                </li>

                                <li>Communicated with employees in locations across Canada to organize the deployment of new software
                                  and systems, such as an OCR software.
                                </li>

                                <li>Documented new systems and information in company database.</li>
                            </ul>
                      
                    </Row>
                </Container>
            </div>

        );
    }
}

export default Experience;
