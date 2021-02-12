import "./App.css";
import { Col, Container, Row } from 'react-bootstrap';

import { Header } from "./components/Header";
import { SideNav } from "./components/SideNav";
import { BrowserRouter as Router } from "react-router-dom";
import { MainContent } from "./components/MainContent";
import { GlobalProvider } from './context/Provider';

function App() {
  return (
    <GlobalProvider>
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
              <br />
              <MainContent />
            </Col>
          </Row>
        </Router>
      </Container>
    </GlobalProvider>
  );
}

export default App;
