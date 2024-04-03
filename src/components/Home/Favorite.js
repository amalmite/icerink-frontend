import React from "react";
import { Row, Col } from "react-bootstrap";
import "./Favorite.css";
import FavoriteCard from "../Cards/FavoriteCard";
import { Product } from "../ProductDetails";

export default function Favorite() {
  const favoriteProduct = Product.filter(
    (product) => product.type === "favorite"
  );

  return (
    <div className="fav-main">
      <Row className="align-items-center p-5 ">
        <Col>
          <hr style={{ margin: "0 10px" }} />
        </Col>
        <Col xs="auto">
          <p className="fs-2 fw-light" style={{ margin: "0 10px" }}>
            {" "}
            SELECT YOUR FAVORITE
          </p>
        </Col>
        <Col>
          <hr style={{ margin: "0 10px" }} />
        </Col>
      </Row>

      <Row xs={1} md={2} className="g-5">
        {favoriteProduct.map((card) => (
          <Col key={card.id}>
            <FavoriteCard
              image={card.image}
              month={card.duration}
              title={card.title}
              description={card.description}
              price={card.price}
              id={card.id}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
}
