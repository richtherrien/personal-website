import React, { Component } from 'react';
import "./pageDefaults.scss";
import { Container, Row, Col } from 'reactstrap';

import { FaJava, FaCode, FaLinux, FaHtml5, FaJs, FaBootstrap, FaGit, FaNodeJs, FaPhp, FaPython, FaMicrosoft, FaCuttlefish, FaRegFileCode, FaDatabase } from 'react-icons/fa';

const items = [
    {
        faIcon: <FaJava />,
        title: 'Java',
        caption: '5 years programming for different projects in Netbeans and Android Studio'
    }, {
        faIcon: <FaPhp />,
        title: 'PHP',
        caption: 'Less than a year of developing on a web platform'
    }, {
        faIcon: <FaCuttlefish />,
        title: 'C',
        caption: '3 years with the programming language'
    }, {
        faIcon: <FaCode />,
        title: 'VHDL',
        caption: '3 years with programming, created 32-bit CPU using Quartus'
    }, {
        faIcon: <FaCode />,
        title: 'MATLAB',
        caption: '3 years of analyzing data from different experiments'
    }, {
        faIcon: <FaRegFileCode />,
        title: 'Assembly Language',
        caption: '2 years of experience, used to program a HCS12 processor'
    }, {
        faIcon: <FaLinux />,
        title: 'Linux',
        caption: '4 years of using the operating system at work and university'
    }, {
        faIcon: <FaHtml5 />,
        title: 'HTML/CSS',
        caption: '2 year of creating new web pages and styles'
    }, {
        faIcon: <FaJs />,
        title: 'JavaScript',
        caption: '1 year of using the dynamic language for development'
    }, {
        faIcon: <FaBootstrap />,
        title: 'Bootstrap',
        caption: '1 year through work and personal projects'
    }, {
        faIcon: <FaCode />,
        title: 'C++',
        caption: '1 year of developing applications'
    }, {
        faIcon: <FaGit />,
        title: 'Git',
        caption: ' 1 year of experience using as a collaborative tool'
    }, {
        faIcon: <FaNodeJs />,
        title: 'Node.js',
        caption: '1 year of experience using the run-time environment to execute JavaScript'
    }, {
        faIcon: <FaDatabase />,
        title: 'SQL',
        caption: 'Less than a year integrating with applications in SQLite and MySQL'
    }, {
        faIcon: <FaPython />,
        title: 'Python',
        caption: 'Less than a year of experience in the work environment'
    }, {
        faIcon: <FaDatabase />,
        title: 'NoSQL',
        caption: 'Less than a year experience with utilizing NoSQL databases'
    }, {
        faIcon: <FaMicrosoft />,
        title: 'Microsoft Products',
        caption: 'Excel, PowerPoint, Word, Access, and SharePoint'
    }

];



class Skills extends Component {

    _getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    render() {
        const slides = items.map((item) => {
            let iconColor = { color: this._getRandomColor(), 'background-color': this._getRandomColor() }
            return (
                <Col className="col-nospacing" >
                    <div class="flip-card rotate-in-center">
                        <div class="flip-card-inner">
                            <div class="flip-card-front" style={iconColor}>
                                {item.faIcon}
                            </div>
                            <div class="flip-card-back">
                                <h1>{item.title}</h1>
                                <p> {item.caption}</p>

                            </div>
                        </div>
                    </div>
                </Col >
            );
        });

        return (
            <div className="container-fluid">
                <Container >
                    <h1 className="display-4">Skills</h1>
                    <Row>
                        {slides}
                    </Row>


                </Container>
            </div >
        );
    }
}

export default Skills;
