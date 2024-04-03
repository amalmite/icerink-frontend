import React, { useEffect, useState } from "react";
import { Row, Container } from "react-bootstrap";
import HomeCarousel from "./HomeCarousel";
import BookingForm from "../BookingForm";
import Favorite from "./Favorite";
import SkateCard from "../Cards/SkateCard";
import MemberShip from "./MemberShip";
import Preloader from "../Preloader/Preloader";
import { Product } from "../ProductDetails";

const HomePage = () => {
  const skateProduct = Product.filter((product) => product.type === "skate");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 700);
  }, []);

  return (
    <div style={{ backgroundColor: "#E5E5E5" }}>
      {isLoading ? (
        <Preloader />
      ) : (
        <div>
          <HomeCarousel />
          <Container>
            <Row
              xs={1}
              md={3}
              style={{
                marginTop: "-8.7%",
                padding: "5%",
                display: "flex",
                justifyContent: "center",
                gap: "3%",
              }}
            >
              <div className="col-md-4 mb-3" style={{ maxWidth: "360px" }}>
                <div className="card b-zero   effect2">
                  <BookingForm />
                </div>
              </div>

              {skateProduct.map((product) => (
                <div className="col-md-4 mb-3" style={{ maxWidth: "360px" }} key={product.id}>
                  <div className="card b-zero" >
                    <SkateCard
                      image={product.image}
                      skate={product.title}
                      price={product.price}
                      clr={product.color}
                      id={product.id}
                    />
                  </div>
                </div>
              ))}
            </Row>
            <Favorite />
          </Container>
          <MemberShip />
        </div>
      )}
    </div>
  );
};

export default HomePage;
