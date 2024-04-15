import React from "react";
import "./ProductCard.css";
import { Image } from "react-bootstrap";
// import AuthContext from "../Context/AuthContext";
import { Col, Row } from "react-bootstrap";

const ProductCard = ({ image, name, id ,price,description}) => {
  console.log(description);
  // const { booking, setBooking } = useContext(AuthContext);
  // const [added, setAdded] = useState(false);

  // const handleSubmit = (e, id) => {
  //   e.preventDefault();

  //   const productData = Product.find((option) => option.id === id);

  //   const isAdded = booking.some((product) => product.productId === id);

  //   if (!isAdded) {
  //     setBooking((prevBooking) => [
  //       ...prevBooking,
  //       {
  //         productId: id,
  //         quantity: "1",
  //         data: productData,
  //       },
  //     ]);
  //     setAdded(true);
  //     console.log(booking);
  //   } else {
  //   }
  // };

  return (
    <>
<Row>
          <Col lg="3" md="12" className="mb-4 mb-lg-0">
            <div className="product-card shadow b-zero">
              {/* Product cards */}
              <div
                className="d-flex justify-content-center align-content-center py-2"
                style={{ height: "7rem" }}
              >
                <Image src={image} alt="Product" className="object-fit-cover" />
              </div>
              <div className="product-content">
                <div className="text-2">
                  <span>AED {price}</span>
                </div>

                <div className="container2">
                  <div className="sub-container ">+</div>
                  <div className="sub-container sub-quantity">2</div>
                  <div className="sub-container">-</div>
                </div>
              </div>
            </div>
          </Col>

          <Col className=" mb-4 mb-lg-0">
            <p>
              <strong>{name}</strong>
            </p>
<p>{description}</p>
<div className="d-flex justify-content-end">

          <button className="product-action">Add to cart</button>
</div>
          </Col>
        <hr className="my-4" />
          </Row>

    </>
  );
};

export default ProductCard;
