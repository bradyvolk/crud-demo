// Import React
import React from "react";

// Import Bootstrap
import { Nav, Navbar, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

// Import Custom CSS
import "./styles/App.css";

// Import from react-router-dom
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import other React Component
import CreateStudent from "./components/create-student.component";
import EditStudent from "./components/edit-student.component";
import StudentList from "./components/student-list.component";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header"></header>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="/create-student">CRUD App Demo</Navbar.Brand>
            <Nav className="justify-content-end">
              <Nav.Link href="/create-student" className="nav-link">
                Create Student
              </Nav.Link>
              <Nav.Link href="/student-list" className="nav-link">
                Student List
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>

        <Container>
          <Row>
            <Col md={12}>
              <div className="wrapper">
                <Routes>
                  <Route exact path="/" element={<CreateStudent />} />
                  <Route path="/create-student" element={<CreateStudent />} />
                  <Route path="/edit-student/:id" element={<EditStudent />} />
                  <Route path="/student-list" element={<StudentList />} />
                </Routes>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </Router>
  );
}

export default App;
