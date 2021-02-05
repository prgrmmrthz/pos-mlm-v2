import React from 'react';
import { Nav, Navbar} from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const SideNav = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Nav defaultActiveKey="/home" className="flex-column">
                <Link to="/products">Products</Link>
                <Link to="/sales">Sales</Link>
            </Nav>
        </Navbar>
    )
}
