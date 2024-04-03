import React from 'react';
import {
    Container,
    Row,
    Col,
    Card,
    Button,
    Form,
    Image
} from 'react-bootstrap';
import image1 from '../images/single.jpg'
import logo from '../images/logo.png'
import './Login.css'

function Login() {
    return (
        <Container className='login-main-div'>
            <Row className='justify-content-center'>
                <Col lg={8} md={10}>
                    <Card className='login-card-div'>
                        <Row className='g-0'>

                            <Col md={6}>
                                <Image src={image1} alt="login form" className='rounded-start w-100 h-100 image-container' />
                            </Col>

                            <Col md={6}>
                                <Card.Body className='d-flex flex-column justify-content-center' style={{ padding: '10%' }}>
                                    <div className='d-flex flex-row justify-content-center align-items-center mt-2'>
                                        <img
                                            alt=""
                                            src={logo}
                                            width="100"
                                            height="70"
                                            className="d-inline-block align-top"
                                        />
                                    </div>
                                    <div className='d-flex justify-content-center align-items-center'>
                                        <h5 className="fw-normal my-4">Sign into your account</h5>
                                    </div>
                                    <Form.Group className='mb-4'>
                                        <Form.Control type='email' placeholder='Email address' />
                                    </Form.Group>
                                    <Form.Group className='mb-4'>
                                        <Form.Control type='password' placeholder='Password' />
                                    </Form.Group>

                                    <Button className="mb-4 px-5" variant='primary'>Login</Button>
                                    <a className="small text-muted" href="#!">Forgot password?</a>
                                    <p className="mb-5 pb-lg-2" style={{ color: '#393f81' }}>Don't have an account? <a href="#!" style={{ color: '#393f81' }}>Register here</a></p>
                                </Card.Body>
                            </Col>

                        </Row>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default Login;
