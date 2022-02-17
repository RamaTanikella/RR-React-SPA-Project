import logo from './logo.svg';
import './App.css';
import * as ReactBootStrap from  "react-bootstrap";

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Link>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Link>
      </div>
    </Router>
  ;


function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}


function App() {
  return (
    <div className="App">
      <ReactBootStrap.Navbar bg="primary" expand={false}>
  <ReactBootStrap.Container fluid>
    <ReactBootStrap.Navbar.Brand href="#">Chairs</ReactBootStrap.Navbar.Brand>
    <ReactBootStrap.Navbar.Toggle aria-controls="offcanvasNavbar" />
    <ReactBootStrap.Navbar.Offcanvas
      id="offcanvasNavbar"
      aria-labelledby="offcanvasNavbarLabel"
      placement="end"
    >
      <ReactBootStrap.Offcanvas.Header closeButton>
        <ReactBootStrap.Offcanvas.Title id="offcanvasNavbarLabel">Offcanvas</ReactBootStrap.Offcanvas.Title>
      </ReactBootStrap.Offcanvas.Header>
      <ReactBootStrap.Offcanvas.Body>
        <ReactBootStrap.Nav className="justify-content-end flex-grow-1 pe-3">
          <ReactBootStrap.Nav.Link href="#action1">Home</ReactBootStrap.Nav.Link>
          <ReactBootStrap.Nav.Link href="#action2">About</ReactBootStrap.Nav.Link>
          
        </ReactBootStrap.Nav>
        <ReactBootStrap.Form className="d-flex">
          <ReactBootStrap.FormControl
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <ReactBootStrap.Button variant="outline-success">Search</ReactBootStrap.Button>
        </ReactBootStrap.Form>
      </ReactBootStrap.Offcanvas.Body>
    </ReactBootStrap.Navbar.Offcanvas>
  </ReactBootStrap.Container>
</ReactBootStrap.Navbar>
      <h1>Chairs - Product Page</h1>
      
      
    </div>
    

  );
}


    

export default App;
