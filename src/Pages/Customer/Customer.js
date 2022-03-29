import React, { useState } from "react";
import { Container, Row } from "react-bootstrap";
import { IoSearchSharp } from "react-icons/io5";
import { Animated, PageTitle } from "../../Components";
import { motion } from "framer-motion";
import {
  account,
  covid19,
  order,
  security,
  returnIco,
  product_help,
  payment,
} from "../../constants";
import CustomerCardItem from "./CustomerCardItem";
import { toast } from "react-toastify";

// Icons

const items = [
  {
    title: "Your Orders ",
    description: "Track packages Edit or cancel order",
    icon: order,
  },
  {
    title: "Returns & Refunds",
    description: "Return or exchange items Print return mailing labels",
    icon: returnIco,
  },
  {
    title: "Get Product Help",
    description: "Troubleshoot product setup and usage issues",
    icon: product_help,
  },
  {
    title: "Payments & Gift Cards",
    description: "Add or edit payment methods View, reload gift card balance",
    icon: payment,
  },
  {
    title: "Your Account",
    description: "Manage your account preferences",
    icon: account,
  },
  {
    title: "Shopping and COVID-19",
    description: "Impacts on orders and deliveries",
    icon: covid19,
  },
  {
    title: "Safe Online Shopping",
    description: "Safe Online Shopping Report something suspicious",
    icon: security,
  },
];

function Customer() {
  const [searchTerm, setSearchTerm] = useState("");
  const [result, setResult] = useState(items);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    if (searchTerm !== "") {
      const result = items.filter(
        (item) =>
          // item.title.toLowerCase().includes(term.toLowerCase())
          item.title.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1
      );
      if (result.length > 0) {
        setResult(result);
      } else {
        setResult(items);
      }
    }
  };
  // let data = serviceData !== undefined ? serviceData : items;

  const filterdResult = items.filter(
    (item) =>
      // item.title.toLowerCase().includes(term.toLowerCase())
      item.title.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1
  );
  return (
    <Animated>
      <PageTitle className=" d-none d-lg-block" name="Customer Service" />
      <div className="customer__service pb-5 mt-n6">
        <div className="container position-relative">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-8 text-center">
              <h3 className="text-gray-400 fs-lg mb-3">
                What can we help you with?
              </h3>
              <form className="input-group mb-3 rounded shadow-sm">
                <IoSearchSharp
                  className="position-absolute top-50 start-0 translate-middle-y ms-3 fs-4"
                  style={{ zIndex: "66" }}
                />
                <input
                  className="form-control rounded ps-5 py-4 shadow"
                  type="text"
                  placeholder="Ask your question..."
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </form>
            </div>
          </div>
        </div>
        <Container className="mt-5">
          {!filterdResult.length ? (
            <h4 className="mb-3">No results found :( </h4>
          ) : (
            <React.Fragment>
              <h4 className="mb-3">Some things you can do here</h4>
              <Row className="d-flex align-items-center">
                {filterdResult.map((item, index) => (
                  <motion.div
                    className="col-md-4"
                    key={index}
                    initial={{
                      opacity: 0,
                      translateX: index % 2 === 0 ? -50 : 50,
                      translateY: -50,
                    }}
                    animate={{ opacity: 1, translateX: 0, translateY: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.3 }}
                  >
                    <CustomerCardItem item={item} />
                  </motion.div>
                ))}
              </Row>
            </React.Fragment>
          )}
        </Container>
      </div>
    </Animated>
  );
}

export default Customer;
