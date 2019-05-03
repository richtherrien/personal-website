import React, { Component } from 'react';
import { Container } from 'reactstrap';

class About extends Component {
    render() {
        return (
            <div className="container-fluid  full-height">
                <Container>
                    <h1 className="display-4">About Me</h1>
                    <p>
                        I grew up in the suburbs and have been living in the Greater Toronto Area for my whole life. Received my Ontario Secondary School Diploma after graduating in 2015 and then I moved on to study Computer Engineering at Ryerson University.
                    </p>
                    <p>
                        I worked in IT for a summer, gaining experience about managing information for a medium size company. I provided administrative support, maintained inventory, updated the filing and other tracking systems.
                    </p>
                    <p>
                        I then moved on to work at Startuptive where I worked on creating a demo product to showcase to investors. I developed in C++ and Java using Android Studios and investigated the hardware and software architecture of Internet of Things based devices,
                    </p>
                    <p>
                        My last job was working at Healthy Pets where I used the Ionic framework to update the company’s cross-platform hybrid mobile app using JavaScript, HTML, and CSS to create a new UX/UI and backend based on mockups. I also worked on some smaller projects  using PHP and Python.
                    </p>
                    <p>
                        Now I am looking for a place to work for the summer before I head back to university to finish my degree in the fall.
                    </p>
                </Container>
            </div>
        );
    }
}

export default About;
