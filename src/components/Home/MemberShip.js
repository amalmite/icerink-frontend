import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ItemCard from "../Cards/ItemCard";
import { Product } from "../ProductDetails";

const MemberShip = () => {
  const membershipProduct = Product.filter(
    (product) => product.type === "membership"
  );

  return (
    <div
      style={{
        backgroundColor: "white",
        paddingLeft: "12%",
        paddingRight: "12%",
      }}
    >
      <Container>
        <Row className="align-items-center p-5 ">
          <Col>
            <hr />
          </Col>
          <Col xs="auto">
            <p className="fs-2 fw-light" style={{ margin: "0 4px" }}>
              MEMBERSHIP
            </p>
          </Col>
          <Col>
            <hr />
          </Col>
        </Row>

        <Row xs={1} md={2} lg={4} className="g-5">
          {membershipProduct.map((product) => (
            <Col key={product.id}>
              <ItemCard
                image={product.image}
                ft="BOOK NOW"
                title={product.title}
                id={product.id}
              />
            </Col>
          ))}
        </Row>

        <div className="my-5">
          <p className="text-center">
            Discover the thrill of gliding across the smooth, glistening surface
            of our state-of-the-art ice rink at SKATE GATE. Nestled in the heart
            of Sharjah, our facility offers an exhilarating and unforgettable
            experience for ice skating enthusiasts of all ages and skill levels.
          </p>{" "}
        </div>
      </Container>
    </div>
  );
};

export default MemberShip;
