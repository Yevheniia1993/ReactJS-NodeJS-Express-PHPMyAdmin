import "./App.css";
import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Routing from "./components/Explore/Router";
import ModalExit from "./components/Explore/Modal";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
function App(options) {
  const [myThemes, setmyThemes] = useState("BlackThemes");
  const [switchbtn, setSwitchbtn] = useState("switch-btn");
  const [Variant, setVariant] = useState("dark");
  const [nameThemes, setName] = useState("Dark theme");
  function chekThemes() {
    if (myThemes === "BlackThemes") {
      setmyThemes("WhiteThemes");
      setSwitchbtn("switch-btn switch-on");
      setVariant("light");
      setName("Light theme");
      setLogo("./imagesMusic/WavsBlack.png");
    } else {
      setmyThemes("BlackThemes");
      setSwitchbtn("switch-btn");
      setVariant("dark");
      setName("Dark theme");
      setLogo("./imagesMusic/WavsWhite.png");
    }
  }
  const [logo, setLogo] = useState("./imagesMusic/WavsWhite.png");

  return (
    <div className={myThemes}>
      <Navbar>
        <Container fluid>
          <Navbar.Brand>
            <img className="logoClass" src={logo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <NavDropdown title="Explore" menuVariant={Variant}>
              <NavDropdown.Item as={Link} to="/Explore">
                Explore
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/Samples">
                Samples
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/Packs">
                Packs
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/Selections">
                Selections
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/Creators">
                Creators
              </NavDropdown.Item>
            </NavDropdown>
          </Navbar.Collapse>
          <ModalExit mystore={options} />
          <div onClick={chekThemes.bind(this)} className={switchbtn}></div>
          <p className="nameThemes">{nameThemes}</p>
        </Container>
      </Navbar>
      <Routing />
    </div>
  );
}

export default App;
