import React from 'react';
import SideBar from './sidebar';
import { Row, Col } from 'react-bootstrap';
function About() {
    return (
        <div>
            <div className="about">
                <Row>
                    <Col lg={4} md={4}>
                        <SideBar />
                    </Col>
                    <Col lg={8} md={8}>

                    <h1>About</h1>
                    <a >Hi, i began my career when i start working as React js developer i have one year experience in Web development i have experience with JavaScript(jQuery, React) CSS(Bootstrap) ,SQL, HTML5 REST API's , Java(Spring, FX) Android Studio Responsiveness also i worked along small projects on Fire Base Express PHP.

                        I believe there is always something to learn no matter how old or new you are in your field. I'm very excited to learn new skills and adopt 'em quickly, learning is kindda fun i always hv strong desire to know or learn new technology. fun fact i never get tired of programming.
                    </a>
        
        </Col>
        </Row>
        </div>
    </div >
    
);
}
export default About;
