import React, { Component } from 'react';
import {
    Navbar,
    NavLink
} from 'reactstrap';
import { FaLinkedin, FaGithub, FaMagnet } from 'react-icons/fa';

class Footer extends Component {
    render() {
        return (
            <footer>
                <div >
                    <Navbar className="bg-dark text-light" expand="md">
                        <FaLinkedin />
                        <NavLink href="https://www.linkedin.com/in/richard-therrien/">LinkedIn</NavLink>
                        <FaGithub />
                        <NavLink href="https://github.com/richtherrien">GitHub</NavLink>
                        <FaMagnet />
                        <NavLink href="https://magnet.whoplusyou.com/cv/ZXlKcGRpSTZJbkpuVFZWRlJVeHFVVmt5Ym1oNVlWWkZUR3RQTTBFOVBTSXNJblpoYkhWbElqb2lhV2xMSzJGa09XSnRNMEpwYTFGUGRrNU5Wbmd5ZWpNNVUxUkhkV1l4U0VKMFVrNU5NeXRuWEM5elFuQk5PVUpVU3pGaGRIVjNjR2N5U2pneWFFVmpNSGRaTTAwMFRFSklUR04xVVRsTU4wVmtlblJqV0cxYU4zSk9SSGx1UlhwdGFucG9OWGRaV0dKdGNVRkpQU0lzSW0xaFl5STZJbUpqWm1SbU5URTJZamt3TjJReU1qYzVNREU1WlRnMk1URTJNMll5TldZMU5XTmxaVGcyT1RVM01UWXlZMkU0WkRWaU5HSXhNalU0TTJReFkyVXhNellpZlE9PQ%3D%3D">Magnet</NavLink>
                    </Navbar>
                </div>
            </footer >
        );
    }
}

export default Footer;
