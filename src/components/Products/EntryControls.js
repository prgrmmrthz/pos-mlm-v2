import React, {useState, useContext} from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';

import { GlobalContext } from '../../context/GlobalState';

export const EntryControls = () => {
    const {addProduct, errorX } = useContext(GlobalContext);
    const [show, setShow] = useState(false);
    const [name, setName] = useState("");
    const [retail_price, setRetail_price] = useState(0);
    const [unit_price, setUnit_price] = useState(0);
    const [wholesale_price, setWholesale_price] = useState(0);

    const handleShow = () => {
        setShow(!show)
    };

    const onSubmit = e => {
        e.preventDefault();
        const a = {
            id: Math.floor(Math.random() * 100000000),
            name,
            retail_price,
            unit_price,
            wholesale_price
        }

        addProduct(a);
        console.debug(typeof(errorX));
        if(errorX){
            alert("error");
           /*  alert.fire({
                title: <p>Hello World</p>,
                didOpen: () => {
                  // `MySwal` is a subclass of `Swal`
                  //   with all the same instance & static methods
                  alert.clickConfirm()
                }
              }).then(() => {
                return alert.fire(<p>Shorthand works too</p>)
              }) */
        }else{
            setName("");
            setRetail_price(0);
            setUnit_price(0);
            setWholesale_price(0);
            setShow(false);
        }
    }

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

            <Modal show={show} onHide={handleShow}>
            <Modal.Header closeButton>
            <Modal.Title>Product Form</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={onSubmit}>
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
            </Modal>
        </>
    );
}
