import React, { useContext, useEffect, useState } from "react";
import { Row, Col, Container, Card, Image } from "react-bootstrap";
import "./Details.css";
import Test from "./Test";
import ProductCard from "./Cards/ProductCard";
import { Product } from "./ProductDetails";
import { useParams } from "react-router-dom";
import { Mycontext } from "./context";

const Details = () => {
  const skateProduct = Product.filter((product) => product.type === "product");

  const { id } = useParams();
  const productDetails = Product.find((product) => product.id === id);

  const {  setBooking } = useContext(Mycontext);
  const [formData, setFormData] = useState({
    selectDate: "",
    membership: "",
    selectSession: "",
    numAdmits: "",
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const productData = Product.find(
      (option) => option.id === formData.membership
    );

    setBooking((prevBooking) => [
      ...prevBooking,
      {
        productId: formData.membership,
        quantity: formData.numAdmits,
        data: productData,
        date: formData.selectDate,
        time: formData.selectSession,
      },
    ]);
    setFormData({
      selectDate: "",
      membership: "",
      selectSession: "",
      numAdmits: "",
    });
  };


  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <>
      <div className=" clearfix"></div>
      <Container className="mt-5 pt-2">
        <Card className="b-zero">
          <Row className="align-items-center">
            <Col
              xs={12}
              md={6}
              className="d-flex align-items-center justify-content-center"
            >
              {/* <Card.Img
                src={productDetails.image}
                alt={productDetails.title}
                height={300}
                style={{ objectFit: "cover",width:'100%'}}
              /> */}
              <div
                className="d-flex justify-content-center align-content-center"
                style={{ height: "20rem" }}
              >
                <Image
                  src={productDetails.image}
                  alt="Product"
                  className=" object-fit-cover w-100"
                />
              </div>
            </Col>
            <Col xs={12} md={6} className="p-2">
              <h3>{productDetails.title}</h3>
              <h5>{productDetails.sub_title}</h5>
              <p className="p-text">{productDetails.description}</p>
              <h6>PRICE : AED {productDetails.price}</h6>
              <h6>DURATION : {productDetails.duration}</h6>
            </Col>
          </Row>
        </Card>
        <div className=" clearfix"></div>
        <div className="row ml-0 mr-0 mt-0">
          <Row className="align-items-center p-5">
            <Col>
              <hr />
            </Col>
            <Col xs="auto">
              <p className="fs-2 fw-light" style={{ margin: "0 4px" }}>
                SKATING PRODUCT
              </p>
            </Col>
            <Col>
              <hr />
            </Col>
          </Row>

          <Row xs={1} md={2} lg={4} className="px-4">
            {skateProduct.map((product) => (
              <Col className="mt-3" key={product.id}>
                <ProductCard
                  image={product.image}
                  name={product.title}
                  id={product.id}
                />
              </Col>
            ))}
          </Row>
        </div>

        <div style={{ marginTop: "10%" }}>
          <h5 className="title-bg">BOOK NOW</h5>
          <div className="booking-body">
            <form className="row g-4" onSubmit={handleSubmit}>
              <div className="col-md-3">
                <input
                  type="date"
                  id="selectDate"
                  className="form-control"
                  value={formData.selectDate}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="col-md-3">
                <select
                  id="membership"
                  className="form-control"
                  style={{ height: "42px" }}
                  value={formData.membership}
                  onChange={handleInputChange}
                >
                  <option>Select Membership</option>
                  {Product.filter((product) => product.type !== "product").map(
                    (option) => (
                      <option key={option.id} value={option.id}>
                        {option.title}-AED{option.price}
                      </option>
                    )
                  )}
                </select>
              </div>
              <div className="col-md-3">
                <select
                  id="selectSession"
                  className="form-control"
                  style={{ height: "42px" }}
                  value={formData.selectSession}
                  onChange={handleInputChange}
                >
                  <option>Select Session</option>
                  <option value="session1">11:00 AM - 12:00 PM</option>
                  <option value="session2">12:30 PM - 01:30 PM</option>
                  <option value="session3">2:00 PM - 03:00 PM</option>
                  <option value="session4">03:30 PM - 04:30 PM</option>
                  <option value="session5">05:00 AM - 06:00 PM</option>
                </select>
              </div>
              <div className="col-md-3">
                <input
                  type="number"
                  id="numAdmits"
                  className="form-control"
                  min={1}
                  required
                  value={formData.numAdmits}
                  onChange={handleInputChange}
                  placeholder="Number of Admissions"
                />
              </div>
              <div className="col-md-12 text-center">
                <button className="form-button" type="submit">
                  BOOK NOW
                </button>
              </div>
            </form>
          </div>
        </div>
      </Container>
      <div className="pt-4">
        <Test />
      </div>
    </>
  );
};

export default Details;
