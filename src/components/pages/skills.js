import React, { Component } from 'react';
import "./pageDefaults.scss";
import { Container, Row, Col } from 'reactstrap';

import { FaJava, FaCode, FaLinux, FaHtml5, FaJs, FaBootstrap, FaGit, FaPhp, FaPython, FaMicrosoft, FaCuttlefish, FaRegFileCode, FaDatabase, FaFileCode, FaUnity, FaAngular } from 'react-icons/fa';
import { DiDjango, DiCodeigniter, DiLaravel, DiIonic } from 'react-icons/di';
import { SiTypescript, SiCsharp } from 'react-icons/si';

const items = [
    {
        faIcon: <FaJava />,
        title: 'Java',
        caption: 'Extensive programming for various projects in Netbeans and Android Studio'
    }, {
        faIcon: <FaPhp />,
        title: 'PHP',
        caption: 'Experience developing web applications'
    }, {
        faIcon: <FaCuttlefish />,
        title: 'C',
        caption: 'Proficient with the programming language'
    }, {
        faIcon: <FaCode />,
        title: 'VHDL',
        caption: 'Created 32-bit CPU using Quartus'
    }, {
        faIcon: <FaFileCode />,
        title: 'MATLAB',
        caption: 'Analyzed data from different experiments'
    }, {
        faIcon: <FaRegFileCode />,
        title: 'Assembly Language',
        caption: 'Used to program a HCS12 processor'
    }, {
        faIcon: <FaLinux />,
        title: 'Linux',
        caption: 'Skilled in using the operating system in work and academic settings'
    }, {
        faIcon: <FaHtml5 />,
        title: 'HTML/CSS',
        caption: 'Created new web pages and styles'
    }, {
        faIcon: <FaJs />,
        title: 'JavaScript',
        caption: 'Utilized for dynamic web development'
    }, {
        faIcon: <FaBootstrap />,
        title: 'Bootstrap',
        caption: 'Used through work and personal projects'
    }, {
        faIcon: <FaCode />,
        title: 'C++',
        caption: 'Developed applications with the language'
    }, {
        faIcon: <SiCsharp />,
        title: 'C#',
        caption: 'Developed web applications with ASP.net'
    }, {
        faIcon: <FaGit />,
        title: 'Git',
        caption: 'Used as a collaborative tool in projects'
    }, {
        faIcon: <FaAngular />,
        title: 'Angular',
        caption: 'Worked on projects and developed an Ionic application'
    }, {
        faIcon: <FaFileCode />,
        title: 'Vue.js',
        caption: 'Experience developing web applications'
    }, {
        faIcon: <FaDatabase />,
        title: 'SQL',
        caption: 'Integrated with applications using SQLite and MySQL'
    }, {
        faIcon: <SiTypescript />,
        title: 'TypeScript',
        caption: 'Developed mobile applications with Ionic framework'
    }, {
        faIcon: <FaPython />,
        title: 'Python',
        caption: 'Used in a work environment'
    }, {
        faIcon: <FaDatabase />,
        title: 'NoSQL',
        caption: 'Utilized NoSQL databases'
    }, {
        faIcon: <FaMicrosoft />,
        title: 'Microsoft Products',
        caption: 'Excel, PowerPoint, Word, Access, and SharePoint'
    }, {
        faIcon: <DiDjango />,
        title: 'Django',
        caption: 'Developed web applications using the Django framework'
    }, {
        faIcon: <DiCodeigniter />,
        title: 'CodeIgniter',
        caption: 'Developed web applications using the CodeIgniter framework'
    }, {
        faIcon: <DiLaravel />,
        title: 'Laravel',
        caption: 'Developed web applications using the Laravel framework'
    }, {
        faIcon: <DiIonic />,
        title: 'Ionic',
        caption: 'Developed mobile applications using the Ionic framework'
    }, {
        faIcon: <FaUnity />,
        title: 'Unity',
        caption: 'Developed applications using Unity'
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
        const slides = items.map((item, i) => {
            let iconColor = { color: this._getRandomColor(), 'backgroundColor': this._getRandomColor() }
            return (
                <Col className="col-nospacing" key={i}>
                    <div className="flip-card rotate-in-center">
                        <div className="flip-card-inner">
                            <div className="flip-card-front" style={iconColor}>
                                {item.faIcon}
                            </div>
                            <div className="flip-card-back">
                                <h1>{item.title}</h1>
                                <p> {item.caption}</p>
                            </div>
                        </div>
                    </div>
                </Col >
            );
        });

        return (
            <div className="container-fluid pb-5 full-height">
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
