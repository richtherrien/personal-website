import React, { Component } from 'react';
import "./pageDefaults.scss";
import { Container, Row, Col } from 'reactstrap';

import { FaJava, FaCode, FaLinux, FaHtml5, FaJs, FaBootstrap, FaGit, FaPhp, FaPython, FaMicrosoft, FaCuttlefish, FaRegFileCode, FaDatabase, FaFileCode } from 'react-icons/fa';

const items = [
    {
        key:0,
        faIcon: <FaJava />,
        title: 'Java',
        caption: '5 years programming for different projects in Netbeans and Android Studio'
    }, {
        faIcon: <FaPhp />,
        title: 'PHP',
        caption: '2 year of experience with developing web applications'
    }, {
        faIcon: <FaCuttlefish />,
        title: 'C',
        caption: '4 years with the programming language'
    }, {
        faIcon: <FaCode />,
        title: 'VHDL',
        caption: '3 years with programming, created 32-bit CPU using Quartus'
    }, {
        faIcon: <FaFileCode />,
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
        caption: '3 year of creating new web pages and styles'
    }, {
        faIcon: <FaJs />,
        title: 'JavaScript',
        caption: '2 years of using the dynamic language for development'
    }, {
        faIcon: <FaBootstrap />,
        title: 'Bootstrap',
        caption: '2 years through work and personal projects'
    }, {
        faIcon: <FaCode />,
        title: 'C++',
        caption: '2 years of developing applications'
    }, {
        faIcon: <FaFileCode />,
        title: 'C#',
        caption: '2 years of experience with developing web applications with ASP.net.'
    }, {
        faIcon: <FaGit />,
        title: 'Git',
        caption: '2 years of experience using as a collaborative tool'
    }, {
        faIcon: <FaCode />,
        title: 'Angular',
        caption: '1 year of experience with projects and the development of an Ionic application'
    }, {
        faIcon: <FaFileCode />,
        title: 'Vue.js',
        caption: 'Less than a year through the development of web applications.'
    },{
        faIcon: <FaDatabase />,
        title: 'SQL',
        caption: '2 years of integrating with applications in SQLite and MySQL'
    }, {
        faIcon: <FaCode />,
        title: 'TypeScript',
        caption: '1 year of experience with developing mobile applications with Ionic framework'
    }, {
        faIcon: <FaPython />,
        title: 'Python',
        caption: '1 year of experience in the work environment'
    }, {
        faIcon: <FaDatabase />,
        title: 'NoSQL',
        caption: '1 year of experience with utilizing NoSQL databases'
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
        const slides = items.map((item, i) => {
            let iconColor = { color: this._getRandomColor(), 'backgroundColor': this._getRandomColor() }
            return (
                <Col className="col-nospacing" >
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
