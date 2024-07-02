import React, { Component } from "react";
import { Container } from "reactstrap";

class About extends Component {
    render() {
        return (
            <div className="container-fluid full-height">
                <Container>
                    <h1 className="display-4">About Me</h1>
                    <p>Hello! I'm Richard Therrien, a passionate and dedicated technology professional with over five years of experience in full stack development, software development, and sales engineering. Throughout my career, I have successfully led product management efforts, overseen project management, and developed user-friendly applications and systems.</p>
                    <p>I graduated with a Bachelor of Engineering in Computer Engineering from Toronto Metropolitan University (formerly Ryerson University) in 2020. Since then, I've had the opportunity to work with several innovative companies, where I've managed software releases, led teams, and developed cutting-edge solutions using a wide array of technologies.</p>
                    <p>My technical expertise includes programming languages such as PHP, Java, JavaScript, C++, C, and C#. I'm also proficient in HTML and CSS for web development. I have extensive experience with frameworks and libraries such as React.js, Vue.js, Angular, Django, CodeIgniter, Laravel, Ionic, and Bootstrap. Additionally, I'm skilled in using tools and technologies like Unity, Docker, Git, Figma, SQL, and NoSQL databases.</p>
                    <p>I thrive in dynamic environments where I can leverage my skills in team leadership, project management, and problem-solving. My approach to technology and product development is rooted in Agile methodologies, ensuring that I deliver high-quality, scalable solutions that meet user needs.</p>
                    <p>I'm always excited to take on new challenges and collaborate with like-minded professionals. Feel free to reach out if you'd like to connect or discuss potential opportunities!</p>
                </Container>
            </div>
        );
    }
}

export default About;
