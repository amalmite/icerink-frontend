import React from "react";
import { Card, CardBody, Row, Col, CardFooter } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const FavoriteCard = ({ image, month, price, id, title, description }) => {

  const navigate = useNavigate();

  return (
    <>
      <Card className="b-zero">
        <img
          variant="top"
          src={image}
          alt="Favorite"
          height={260}
          style={{ objectFit: "cover" }}
        />
        <CardBody>
        <Row className="p-3">
            <Col xs={12} md={6}>
              <p className="fs-6 fw-normal">{title}</p>
            </Col>

            <Col xs={12} md={6}>
              <p className="fs-6">
                {description.length > 56
                  ? `${description.slice(0, 56)}...`
                  : description}
              </p>
            </Col>
          </Row>
        </CardBody>
        <CardFooter className="p-0" onClick={() => navigate(`/details/${id}`)}>
          <Row
            noGutters
            className="text-white text-center align-items-center w-100 m-0"
          >
            <Col
              md={8}
              xs={12}
              className="d-flex justify-content-center justify-content-md-start px-md-5 align-items-center py-3"
              style={{ backgroundColor: "#1ca7c8" }}
            >
              <p className="mb-0">DURATION: {month}</p>
            </Col>
            <Col
              md={4}
              xs={12}
              className="d-flex justify-content-center align-items-center py-3"
              style={{ backgroundColor: "#1d98b9" }}
            >
              <p className="mb-0 fw-bold">AED {price}</p>
            </Col>
          </Row>
        </CardFooter>
      </Card>
    </>
  );
};

export default FavoriteCard;
