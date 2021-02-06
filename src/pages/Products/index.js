import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import { EntryControls } from './EntryControls';
import { Table } from './Table';

export const Products = () => {
    return (
        <Container fluid>
            <Row>
                <Col sm={12}>
                    <EntryControls />
                </Col>
            </Row>
            <br />
            <br />
            <Row>
                <Col>
                    <Table />
                </Col>
            </Row>
        </Container>
    )
}
