
import React from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';
import location from '../../images/location.png'
import mail from '../../images/mail.png'
import phone from '../../images/phone.png'


const Contact = () => {


  const mainStyle = {
    marginLeft: '5%',
     marginRight: '5%'
  
  }
  return (
    <section className='border text-center' >
      
    <Row className="align-items-center p-5">
      <Col>
        <hr  />
      </Col>
      <Col xs="auto">
        <p className='fs-2 fw-light' style={{ margin: '0 4px' }}>CONTACT US</p >
      </Col>
      <Col>
        <hr/>
      </Col>
    </Row>
   



       <div className='row' style={mainStyle}>
        <div className='col-lg-5'>
        <iframe
  title='UAE Map'
  src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3438974.8859643196!2d54.65282117612461!3d23.88694040464362!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f434adcedbbc1%3A0xe78433c91ed17fcd!2sUnited%20Arab%20Emirates!5e0!3m2!1sen!2sus!4v1648993347539!5m2!1sen!2sus'
  className='h-100 w-100'
  style={{ border: '0' }}
  loading='lazy'></iframe>

        </div>
        <div className='col-lg-7 g-5'>
          <Form>
            <Row>
              <Col md={9}>
                <Row className='mb-4'>
                  <Col>
                    <Form.Group controlId='form3FirstName'>
                      <Form.Label>First name</Form.Label>
                      <Form.Control type='text' />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group controlId='form3Email'>
                      <Form.Label>Email Address</Form.Label>
                      <Form.Control type='email' />
                    </Form.Group>
                  </Col>
                </Row>
                <Form.Group controlId='form3Subject' className='mb-4'>
                  <Form.Label>Subject</Form.Label>
                  <Form.Control type='text' />
                </Form.Group>
                <Form.Group controlId='form3Textarea' className='mb-4'>
                  <Form.Label>Message</Form.Label>
                  <Form.Control as='textarea' rows={3} />
                </Form.Group>
                <Button style={{backgroundColor:'#0056b3'}} className='mb-4 w-100'>
                  Send
                </Button>
              </Col>
              <Col md={3}>
                <ul className='list-unstyled'>
                  <li>
                    <img src={location} alt='location' height={100} width={100} />
                    <p>
                      <small>AJMAN UAE</small>
                    </p>
                  </li>
                  <li>
                    <img src={phone} alt='phone' height={100} width={100} />
                    <p>
                      <small>+ 01 234 567 89</small>
                    </p>
                  </li>
                  <li>
                    <img src={mail} alt='mail' height={100} width={100} />
                    <p>
                      <small>contact@gmail.com</small>
                    </p>
                  </li>
                </ul>
              </Col>
            </Row>
          </Form>
        </div>
      </div>
    </section>
  );
}

export default Contact