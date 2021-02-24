import React from "react";
import "./style.css";
import Navbar  from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

function Nav() {
 return <>
<Navbar expand="lg" className="color">
  <Container >
    <Navbar.Brand href="#" className="center-navbar">
      <b>Employee Directory</b>
      </Navbar.Brand>
  </Container>
</Navbar>
 </>
}

export default Nav;
