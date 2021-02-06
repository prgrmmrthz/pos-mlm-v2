import React, { useState, useContext } from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import MyControls from "../../components/controls/MyControls";
import { useForm, MyForm } from "../../components/useForm";
import { GlobalContext } from "../../context/GlobalState";
import * as productService from "../../services/productService";

export const EntryControls = () => {
  const { addProduct, errorX } = useContext(GlobalContext);
  const [show, setShow] = useState(false);

  const initialFormValues = {
    product_name: "",
    retail_price: 0,
    unit_price: 0,
    wholesale_price: 0,
    class_id: 1
  };

  const { values, setValues, handleInputChange } = useForm(initialFormValues);

  const handleShow = () => {
    setShow(!show);
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <Navbar expand="lg">
        <Navbar.Brand href="#home">Products List</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Button variant="outline-success" onClick={handleShow}>
              New
            </Button>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>

      <Modal show={show} onHide={handleShow}>
        <Modal.Header closeButton>
          <Modal.Title>Product Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <MyForm onSubmit={onSubmit}>
            <MyControls.MyInput
              type="text"
              label="Product Name"
              name="product_name"
              value={values.product_name}
              onChange={handleInputChange}
              placeholder="Enter Product Name"
            />
            <MyControls.MyInput
              type="number"
              label="Retail Price"
              name="retail_price"
              value={values.retail_price}
              onChange={handleInputChange}
              placeholder="Enter Retail Price"
            />
            <MyControls.MyInput
              type="number"
              label="Unit Price"
              name="unit_price"
              value={values.unit_price}
              onChange={handleInputChange}
              placeholder="Enter Unit Price"
            />
            <MyControls.MyInput
              type="number"
              label="Wholesale Price"
              name="wholesale_price"
              value={values.wholesale_price}
              onChange={handleInputChange}
              placeholder="Enter Wholesale Price"
            />
            <MyControls.MySelect
              name="class_id"
              label="Classification"
              value={values.class_id}
              onChange={handleInputChange}
              items={productService.getClassificationCollection()}
            />
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </MyForm>
        </Modal.Body>
      </Modal>
    </>
  );
};
