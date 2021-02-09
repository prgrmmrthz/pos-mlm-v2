import React, { useState } from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import MyModal from "../../components/MyModal";
import ProductForm from "./ProductForm";

export const EntryControls = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <Navbar expand="lg">
        <Navbar.Brand href="#home">Products List</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Button variant="outline-success" onClick={()=>setOpenModal(true)}>
              New
            </Button>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>

      <MyModal
        openModal={openModal}
        setOpenModal={setOpenModal}
        title="New Product"
      >
        <ProductForm />
      </MyModal>
    </>
  );
};
