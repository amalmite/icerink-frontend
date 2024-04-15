import React from "react";
import {  Card, Col, Container, Row, Table } from "react-bootstrap";
import { Product } from "./ProductDetails";
import ProductCard from "./Cards/ProductCard";

const Checkout = () => {
  const skateProduct = Product.filter((product) => product.type === "product");
  console.log(skateProduct);
  return (
    <div>
      <section className="h-100 gradient-custom">
        <Container className="py-5 h-100">
          <Row className="justify-content-center my-4">
            <Col md="8">
              <Card className="mb-4" style={{ border: "none" }}>
                <Card.Header className="py-3">
                  <h5 className="mb-0">Skating Products</h5>
                </Card.Header>
                <Card.Body>
                  {skateProduct.map((product) => (
                    // <Row>
                    //   <Col lg="3" md="12" className="mb-4 mb-lg-0">
                    //     <div style={{ width: "200px", padding: "2%" }}>
                    <ProductCard
                      image={product.image}
                      name={product.title}
                      id={product.id}
                      description={product.description}
                      price={product.price}
                    />
                    //      </div>
                    //       </Col>

                    //       <Col lg="5" md="6" className=" mb-4 mb-lg-0">
                    //         <p>
                    //           <strong>Blue denim shirt</strong>
                    //         </p>
                    //         <p>Color: blue</p>
                    //         <p>Size: M</p>

                    //         <Button variant="link">
                    //           <i className="fas fa-trash"></i>
                    //         </Button>

                    //         <Button variant="link" className="text-danger">
                    //           <i className="fas fa-heart"></i>
                    //         </Button>
                    //       </Col>
                    //       <Col lg="4" md="6" className="mb-4 mb-lg-0">
                    //         <div className="d-flex mb-4" style={{ maxWidth: "300px" }}>
                    //           <Button className="px-3 me-2">
                    //             <i className="fas fa-minus"></i>
                    //           </Button>

                    //           <Form.Control defaultValue={1} min={0} type="number" />

                    //           <Button className="px-3 ms-2">
                    //             <i className="fas fa-plus"></i>
                    //           </Button>
                    //         </div>

                    //         <p className="text-start text-md-center">
                    //           <strong>$17.99</strong>
                    //         </p>
                    //       </Col>
                    // <hr className="my-4" />
                    //     </Row>
                  ))}
                </Card.Body>
              </Card>
            </Col>
            <Col md="4">
              <Card className="mb-4 px-4 " style={{border:"none"}}>
                <Card.Header>
                  <h5 className="mb-0 d-flex justify-content-center">ORDER DETAILS</h5>
                </Card.Header>
                <Card.Body className="shadow">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                      Booking Date
                      <span>20/04/2024</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                      Time slot
                      <span>15:00 pm - 16:00 pm</span>
                    </li>
                    <li className="list-group-item border-0 px-0">
                      <Table borderless>
                        <thead>
                          <tr>
                            <th>Item</th>
                            <th>Qty</th>
                            <th>Price</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Skate 65</td>
                            <td>1</td>
                            <td>65</td>
                          </tr>

                          <tr>
                            <td>Penguin</td>
                            <td>1</td>
                            <td>25</td>
                          </tr>
                          <tr>
                            <td>Total</td>
                            <td></td>
                            <td>90</td>
                          </tr>
                          <tr>
                            <td>VAT 2%</td>
                            <td></td>
                            <td>108</td>
                          </tr>
                          <tr style={{ border: "10px" }}>
                            <td>Amount to pay</td>
                            <td></td>
                            <td>AED 108</td>
                          </tr>
                        </tbody>
                      </Table>
                      <h6>
                        Lorem Ipsum is of type and scrambled it to make a type
                        specimen book. It has survived not only five centuries,
                        but also the leap into electronic typesetting, remaining
                        essentially unchanged. It was popularised in the 1960s
                        with the release of Letraset sheets containing Lorem
                        Ipsum passages, and more recently with desktop
                        publishing software like Aldus PageMaker including
                        versions of Lorem Ipsum.
                      </h6>
                    </li>
                    <Row className="justify-content-center">
  <Col md="12" className="text-center mb-2" >
    <button className="product-action" style={{width:"70%"}}>PAY NOW</button>
  </Col>
  <Col md="12" className="text-center">
    <button className="product-action" style={{width:"70%"}}>MEMBERSHIP</button>
  </Col>
</Row>

                  </ul>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Checkout;
