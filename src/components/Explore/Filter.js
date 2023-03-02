import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import MapList from "./Map";
const Filter = () => {
  const DivImage = "forResult";
  const TextG = "textResult";
  const [myTemp, setMyTemp] = useState([]);
  const [myReiting, setMyReiting] = useState([]);
  const [myInstrument, setMyInstrument] = useState([]);
  const [myGenere, setMyGenere] = useState([]);
  const [myfirstFilter, setMyFirstFilter] = useState([]);
  const [mysecondFilter, setMySecondFilter] = useState([]);
  useEffect(() => {
    let Tempo = "Tempo";
    fetch("http://localhost:3010/FiltrList?Filter=" + Tempo + "", {
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
        <button
          onClick={() => {
            cklick(item.Tempo, "Tempo");
          }}
        >
          {item.Tempo}
        </button>
      </div>
    );
  });
  useEffect(() => {
    let Reiting = "Reiting";
    fetch("http://localhost:3010/FiltrList?Filter=" + Reiting + "", {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        let dataSong = [...data];
        setMyReiting(dataSong);
      });
  }, []);
  const Reiting1 = myReiting.map((item, index) => {
    return (
      <div key={index}>
        <button
          onClick={() => {
            cklick(item.Reiting, "Reiting");
          }}
        >
          {item.Reiting}
        </button>
      </div>
    );
  });
  useEffect(() => {
    let Instrument = "Instrument";
    fetch("http://localhost:3010/FiltrList?Filter=" + Instrument + "", {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        let dataSong = [...data];
        setMyInstrument(dataSong);
      });
  }, []);
  const Instrument = myInstrument.map((item, index) => {
    return (
      <div key={index}>
        <button
          onClick={() => {
            cklick(item.Instrument, "Instrument");
          }}
        >
          {item.Instrument}
        </button>
      </div>
    );
  });
  useEffect(() => {
    let Genere = "Genere";
    fetch("http://localhost:3010/FiltrList?Filter=" + Genere + "", {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        let dataSong = [...data];
        setMyGenere(dataSong);
      });
  }, []);
  const Genere = myGenere.map((item, index) => {
    return (
      <div key={index}>
        <button
          onClick={() => {
            cklick(item.Genere, "Genere");
          }}
        >
          {item.Genere}
        </button>
      </div>
    );
  });
  const [inresult, setResult] = useState([]);

  function cklick(myresult, ourFilter) {
    let result = "";
    if (typeof myresult === "number") {
      console.log("число");
      result = myresult;
    } else {
      result = myresult.replace(/&/g, "%26");
      console.log("стринг");
    }
    console.log(typeof result);
    console.log(ourFilter);
    console.log(result);
    let myFlag = 0;
    if (myfirstFilter.length > 0) {
      let i = 0;
      for (let item of myfirstFilter) {
        if (ourFilter === mysecondFilter[i]) {
          console.log("нашел");
          myfirstFilter[i] = result;
          myFlag = 1;
        }
        i++;
      }
    }
    if (myFlag === 0) {
      myfirstFilter.push(result);
      mysecondFilter.push(ourFilter);
    }
    console.log(myfirstFilter);
    console.log(mysecondFilter);
    if (myfirstFilter.length === 1) {
      fetch(
        "http://localhost:3010/GenereQuery?" +
          mysecondFilter[0] +
          "=" +
          myfirstFilter[0] +
          "",
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          let myresult = [...data];
          setResult(myresult);
        });
    }
    if (myfirstFilter.length === 2) {
      fetch(
        `http://localhost:3010/GenereQuery? ${mysecondFilter[0]} = ${myfirstFilter[0]} & ${mysecondFilter[1]}=${myfirstFilter[1]}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
          let myresult = [...data];
          setResult(myresult);
        });
    }
    if (myfirstFilter.length === 3) {
      fetch(
        `http://localhost:3010/GenereQuery? ${mysecondFilter[0]} = ${myfirstFilter[0]} & ${mysecondFilter[1]}=${myfirstFilter[1]} & ${mysecondFilter[2]}=${myfirstFilter[2]}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
          let myresult = [...data];
          setResult(myresult);
        });
    }
    if (myfirstFilter.length === 4) {
      fetch(
        `http://localhost:3010/GenereQuery? ${mysecondFilter[0]} = ${myfirstFilter[0]} & ${mysecondFilter[1]}=${myfirstFilter[1]} & ${mysecondFilter[2]}=${myfirstFilter[2]}& ${mysecondFilter[3]}=${myfirstFilter[3]}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
          let myresult = [...data];
          setResult(myresult);
        });
    }
  }
  return (
    <div>
      <div className="forNavbar">
        <Navbar>
          <Container fluid>
            <Navbar.Toggle />
            <Navbar.Collapse>
              <NavDropdown title="Tempo">
                <NavDropdown.Item>{Tempo}</NavDropdown.Item>
              </NavDropdown>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Navbar>
          <Container fluid>
            <Navbar.Toggle />
            <Navbar.Collapse>
              <NavDropdown title="Reitinig">
                <NavDropdown.Item>{Reiting1}</NavDropdown.Item>
              </NavDropdown>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Navbar>
          <Container fluid>
            <Navbar.Toggle />
            <Navbar.Collapse>
              <Nav>
                <NavDropdown title="Instrument">
                  <NavDropdown.Item>{Instrument}</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Navbar>
          <Container fluid>
            <Navbar.Toggle />
            <Navbar.Collapse>
              <Nav>
                <NavDropdown title="Genere">
                  <NavDropdown.Item>{Genere}</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      <div className="FilterMap">{MapList(DivImage, TextG, inresult)}</div>
    </div>
  );
};

export default Filter;
