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
     
     <Row className="align-items-center p-5">
            <Col>
              <hr />
            </Col>
            <Col xs="auto">
              <p className="fs-2 fw-light text-center" style={{ margin: "0 4px" }}>
                SELECT YOUR FAVORITE
              </p>
            </Col>
            <Col>
              <hr />
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
