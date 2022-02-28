import React, { useState } from 'react';
import { Navbar, Container, Nav, NavDropdown, Carousel, CardGroup, Card, Form, Button, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import img1 from './images/image1.jpg';
import img2 from './images/image2.png';
import img3 from './images/image3.png';
import img4 from './images/image4.png';
import img5 from './images/image5.png';
import img6 from './images/image6.jpg';
import Modal from './Modal'



export default function Header() {

    const [openModal, setOpenModal] = useState(false);

    return (
        <>
            <div>
                <Navbar bg="dark" variant="dark">
                    <Container className="nav-child">
                        <Navbar.Brand href="#home" className="nav-child">CCA</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link target="_blank" href="https://www.ccanitd.in/" className="nav-child">Home</Nav.Link>
                                <Nav.Link target="_blank" href="https://www.ccanitd.in/about" className="nav-child">About</Nav.Link>
                                <NavDropdown title="More" id="basic-nav-dropdown">
                                    <NavDropdown.Item target="_blank" href="https://www.ccanitd.in/wdct">WDCT</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item target="_blank" href="https://www.ccanitd.in/auditions">Auditions</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
            <div className="content">
                <div className="jumbotron">
                    <div className="container">
                        <h1 className="display-5">HI. MY NAME IS GAYATRI AGARWAL</h1>
                    </div>
                </div>

                <div>
                    <Carousel>
                        <Carousel.Item>
                            <img src={img2} className="d-block w-100" alt="First slide" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="d-block w-100" src={img1} alt="Second slide" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="d-block w-100" src={img6} alt="Third slide" />
                        </Carousel.Item>
                    </Carousel>
                </div>

                <div>
                    <CardGroup>
                        <Card className="card">
                            <Card.Img variant="top" src={img3} />
                            <Card.Body>
                                <Card.Title>The Maze</Card.Title>
                                <Card.Text>
                                    The Maze, an event to witness your power of reciprocation to win exciting rewards and
                                    prizes and much more.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Img variant="top" src={img4} />
                            <Card.Body>
                                <Card.Title>Gamers' Night</Card.Title>
                                <Card.Text>
                                    The probability of success is difficult to estimate; but if we never search, the chance
                                    of success is zero.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Img variant="top" src={img5} />
                            <Card.Body>
                                <Card.Title>Trivio</Card.Title>
                                <Card.Text>
                                    Team CCA brings you Trivio, an online 2 days trivia game event to bring out the
                                    inquisitiveness in you and put out your grey matter into action.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </CardGroup>
                </div>

                


                <Form>
                    <Row>
                        <Col>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email:</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Contact:</Form.Label>
                                <Form.Control type="text" placeholder="Enter Contact Number" />
                            </Form.Group>
                        </Col>

                    </Row>
                    
                     
                </Form>
                <Button size="sm" variant="primary" type="submit"
                        onClick={() => {
                            setOpenModal(true);
                        }} >
                        Submit
                    </Button>
                    {openModal && <Modal closeModal={setOpenModal}/>}
            </div>
        </>
    )
}


