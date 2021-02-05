import React, {useState} from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

export const EntryControls = () => {
    const [show, setShow] = useState(false);
    const [name, setName] = useState(false);
    const [retail_price, setRetail_price] = useState(0);
    const [unit_price, setUnit_price] = useState(0);
    const [wholesale_price, setWholesale_price] = useState(0);

    const alert = withReactContent(Swal);

    const handleClose = () => {
        setShow(false)
        alert.fire({
            title: <p>Hello World</p>,
            footer: 'Copyright 2018',
            didOpen: () => {
              // `MySwal` is a subclass of `Swal`
              //   with all the same instance & static methods
              alert.clickConfirm()
            }
          }).then(() => {
            return alert.fire(<p>Shorthand works too</p>)
          })
    };
    const handleShow = () => setShow(true);

    return (
        <>
            <Navbar expand="lg">
                            <Navbar.Brand href="#home">Products List</Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="mr-auto">
                                    <Button variant="outline-success" onClick={handleShow}>New</Button>
                                </Nav>
                                <Form inline>
                                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                                <Button variant="outline-success">Search</Button>
                                </Form>
                            </Navbar.Collapse>
            </Navbar>

            <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Product Form</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Product Name</Form.Label>
                        <Form.Control 
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Enter Product Name"
                        />
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Retail Price</Form.Label>
                        <Form.Control 
                            type="number"
                            value={retail_price}
                            onChange={(e) => setRetail_price(e.target.value)}
                            placeholder="Enter Product Name"
                        />
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Unit Price</Form.Label>
                        <Form.Control 
                            type="number"
                            value={unit_price}
                            onChange={(e) => setUnit_price(e.target.value)}
                            placeholder="Enter Product Name"
                        />
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Wholesale Price</Form.Label>
                        <Form.Control 
                            type="number"
                            value={wholesale_price}
                            onChange={(e) => setWholesale_price(e.target.value)}
                            placeholder="Enter Product Name"
                        />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Close
            </Button>
            </Modal.Footer>
            </Modal>
        </>
    );
}
