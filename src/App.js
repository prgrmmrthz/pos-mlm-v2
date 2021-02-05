import "./App.css";
import { Col, Container, Row } from 'react-bootstrap';

import { Header } from "./components/Header";
import { SideNav } from "./components/SideNav";
import { BrowserRouter as Router } from "react-router-dom";
import { MainContent } from "./components/MainContent";

function App() {
  return (
    <>
      <Container fluid>
        <Router>
          <Row>
            <Col>
              <Header />
            </Col>
          </Row>
          <Row>
            <Col sm={2}>
              <SideNav />
            </Col>
            <Col sm={10}>
              <MainContent />
            </Col>
          </Row>
        </Router>
      </Container>
    </>
  );
}

export default App;
