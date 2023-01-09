import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
const Filter = () => {
  const [myTemp, setMyTemp] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3010/TempoList", {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        let dataSong = [...data];
        setMyTemp(dataSong);
      });
  }, []);
  const Tempo = myTemp.map((item, index) => {
    return (
      <div key={index}>
        <button onClick={cklick.bind(this, item.Tempo)}>{item.Tempo}</button>
      </div>
    );
  });
  const [result, setResult] = useState([]);

  function cklick(temp) {
    fetch("http://localhost:3010/GenereQuery?Tempo=" + temp + "", {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        let myresult = [...data];
        setResult(myresult);
      });
  }
  const filterResult = result.map((item, index) => {
    return (
      <div className="forImgMusic" key={index}>
        <img src={item.IMG} alt="" />
        <div className="textPag">{item.Name}</div>
      </div>
    );
  });
  return (
    <div>
      <Navbar variant="dark" bg="dark" expand="lg">
        <Container fluid>
          <Navbar.Toggle aria-controls="navbar-dark-example" />
          <Navbar.Collapse id="navbar-dark-example">
            <Nav>
              <NavDropdown
                id="nav-dropdown-dark-example"
                title="Tempo"
                menuVariant="dark"
              >
                <NavDropdown.Item>{Tempo}</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div>{filterResult}</div>
    </div>
  );
};

export default Filter;
