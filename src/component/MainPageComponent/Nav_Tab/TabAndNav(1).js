import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import './TabAndNav.css';
import { Container } from 'react-bootstrap';

function TabAndNav() {
    return (
        <>
            <Container>
                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                    <Row >
                        <Col sm={3}>
                            <Nav variant="pills" className="flex-column">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">About Us</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Our Mission</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Our vision</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="four">Our Values</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col sm={9} className='ps-3'>
                            <Tab.Content>
                                <Tab.Pane eventKey="first" className='text-start'>
                                    <p className='TabText'>About Us
                                        We are with you with 20 years of WordPress experience in Web Design, Custom Software, Digital Marketing and Mobile Application Development services. We develop your professional digital marketing strategies.</p>
                                    <ul className='TabText TabUL'>
                                        <li>With 15 years of experience, we help businesses develop mobile solutions,</li>
                                        <li>With our WordPress experience,</li>
                                        <li>We improve your digital marketing strategies and increase,</li>
                                        <li>We focus on what we can offer so you can improve your business,</li>
                                        <li>AWe produce professional digital solutions</li>
                                    </ul>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second" className='text-start'>
                                    <p className='TabText'>We develop effective web designs that combine user experience and your business goals. We design functional and aesthetic websites that best represent your business using the WordPress platform.</p>
                                    <ul className='TabText'>
                                        <li>With 15 years of experience, we help businesses develop mobile solutions,</li>
                                        <li>With our WordPress experience,</li>
                                        <li>We improve your digital marketing strategies and increase,</li>
                                        <li>We focus on what we can offer so you can improve your business,</li>
                                        <li>AWe produce professional digital solutions</li>
                                    </ul>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third" className='text-start'>
                                    <p className='TabText'>We offer custom software solutions for the customized needs of your business. We develop special software that optimizes your business processes, increases productivity and provides competitive advantage.</p>
                                    <ul className='TabText'>
                                        <li>With 15 years of experience, we help businesses develop mobile solutions,</li>
                                        <li>With our WordPress experience,</li>
                                        <li>We improve your digital marketing strategies and increase,</li>
                                        <li>We focus on what we can offer so you can improve your business,</li>
                                        <li>AWe produce professional digital solutions</li>
                                    </ul>
                                </Tab.Pane>
                                <Tab.Pane eventKey="four" className='text-start'>
                                    <p className='TabText'>We develop effective web designs that combine user experience and your business goals. We design functional and aesthetic websites that best represent your business using the WordPress platform.</p>
                                    <ul className='TabText'>
                                        <li>With 15 years of experience, we help businesses develop mobile solutions,</li>
                                        <li>With our WordPress experience,</li>
                                        <li>We improve your digital marketing strategies and increase,</li>
                                        <li>We focus on what we can offer so you can improve your business,</li>
                                        <li>AWe produce professional digital solutions</li>
                                    </ul>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </Container>
        </>
    );
}

export default TabAndNav;