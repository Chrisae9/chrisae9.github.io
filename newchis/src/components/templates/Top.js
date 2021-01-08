import React from "react";
//change these to absolute path to reduce code sent to client
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";

import Chis from "../../resources/chisheadonly.png";

export default function Top() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">
          <img
            src={Chis}
            width="40"
            height="40"
            alt="chis"
            loading="lazy"
          ></img>
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/" active>
            Home
          </Nav.Link>
          <NavDropdown title="Projects">
            <NavDropdown.Item href="/chis-bot">Discord Bot</NavDropdown.Item>
            <NavDropdown.Item href="/split">Split</NavDropdown.Item>
            <NavDropdown.Item href="/keyboard">
              Mechanical Keyboard
            </NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Extras">
            <NavDropdown.Item href="/minecraft">
              Minecraft Server
            </NavDropdown.Item>
            <NavDropdown.Item href="/rocketleague">
              Rocket League Custom Maps
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="https://github.com/Chrisae9">GitHub</Nav.Link>
          <Nav.Link href="#">Resume</Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
}
