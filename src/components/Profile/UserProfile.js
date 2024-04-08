import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import axiosInstance from '../utils/axiosIntance';

const UserProfile = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const getUserData = async () => {
      try {
        const response = await axiosInstance.get("api/user/profile/");
        setUserData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    getUserData();
  }, []);

  return (
    <section style={{ backgroundColor: '#f4f5f7' }}>
      <Container className="py-5">
        <Row className="justify-content-center align-items-center">
          <Col lg="6" className="mb-4 mb-lg-0">
            <Card className="mb-3" style={{ borderRadius: '.5rem' }}>
              {userData && (
                <Row className="g-0">
                  <Col md="4" className="gradient-custom text-center" style={{ borderTopLeftRadius: '.5rem', borderBottomLeftRadius: '.5rem' }}>
                    <h5>{userData.name}</h5>
                    <p>{userData.role}</p>
                    <i className="far fa-edit mb-5"></i>
                  </Col>
                  <Col md="8">
                    <Card.Body className="p-4">
                      <h6>Information</h6>
                      <hr className="mt-0 mb-4" />
                      <Row className="pt-1">
                        <Col size="6" className="mb-3">
                          <h6>Email</h6>
                          <p className="text-muted">{userData.email}</p>
                        </Col>
                        <Col size="6" className="mb-3">
                          <h6>Phone</h6>
                          <p className="text-muted">{userData.phone_number}</p>
                        </Col>
                        <Col size="6" className="mb-3">
                          <h6>Username</h6>
                          <p className="text-muted">{userData.phone_number}</p>
                        </Col>
                      </Row>
                   

                    </Card.Body>
                  </Col>
                </Row>
              )}
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default UserProfile;
