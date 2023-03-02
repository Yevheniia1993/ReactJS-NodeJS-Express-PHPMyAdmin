import React, { useState, useRef, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { Link } from "react-router-dom";

function ModalExit(props) {
  // localStorage.setItem("Login", 0);
  // localStorage.clear();
  console.log(localStorage.getItem("AccountName"));
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
    setInputClass("inputClassFirst");
    setInputClassSign("inputClassFirst");
  };
  const handleShow = () => setShow(true);
  const [myLogin, setMyLogin] = useState("");
  const [myPassword, setMyPassword] = useState("");
  const [imgLogin, setImg] = useState("noneUser");
  const [buttonExit, setButton] = useState("noneUser");
  const [inputClass, setInputClass] = useState("inputClassFirst");
  const [inputClassSign, setInputClassSign] = useState("inputClassFirst");
  const SignLogin = useRef("");
  const SignPassword = useRef("");
  const newLogin = useRef("");
  const newPassword = useRef("");
  const newPhone = useRef("");
  const [buttonOnOff, setButtonOn] = useState("ForModalExit");
  useEffect(() => {
    if (localStorage.getItem("AccountName") !== "0") {
      setImg("ForUser");
      setButton("ExitButton");
      setButtonOn("noneUser");
    } else {
      setImg("noneUser");
      setButton("noneUser");
      setButtonOn("ForModalExit");
    }
  }, []);

  function signOnCabinet() {
    var Login = SignLogin.current.value;
    var Password = SignPassword.current.value;
    fetch("http://localhost:3010/Enter", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ Login: Login, Password: Password }),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data.length);
        if (data.length) {
          console.log("ok");
          handleClose();
          setImg("ForUser");
          setButton("ExitButton");
          setButtonOn("noneUser");
          props.mystore.mystore.dispatch({ type: "Login", data: data });
          console.log(props.mystore.mystore.getState());
          localStorage.setItem("Login", data[0].Tel);
          localStorage.setItem("AccountName", data[0].Login);
        } else {
          console.log("not");
          localStorage.setItem("Login", "0");
          localStorage.setItem("AccountName", "0");
          setInputClassSign("inputClassSign");
          setImg("noneUser");
          setButton("noneUser");
          setButtonOn("ForModalExit");
        }
      });
  }

  function Exit() {
    setMyLogin("");
    setMyPassword("");
    props.mystore.mystore.dispatch({ type: "Exit" });
    console.log(props.mystore.mystore.getState());
    setImg("noneUser");
    setButton("noneUser");
    setButtonOn("ForModalExit");
    localStorage.setItem("Login", "0");
    localStorage.setItem("AccountName", "0");
  }

  function registration() {
    let myLogin = newLogin.current.value;
    let myPassword = newPassword.current.value;
    let myPhone = newPhone.current.value;
    if (myLogin.length && myPassword.length && myPhone.length) {
      fetch("http://localhost:3010/CreateAccount", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          Login: myLogin,
          Password: myPassword,
          Phone: myPhone,
        }),
      })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
        });
      handleClose();
    } else {
      setInputClass("inputClass");
    }
  }

  function openUserCabinet() {}

  return (
    <>
      <button variant="primary" onClick={handleShow} className={buttonOnOff}>
        Sign in
      </button>
      <button onClick={openUserCabinet} className="ButtonUser">
        <Link to="/Account">
          <div className="size-image-small">
            <img
              className={imgLogin}
              src={localStorage.getItem("Avatar")}
              alt=""
            />
          </div>
        </Link>
      </button>
      <Link to="/HomePage">
        <button className={buttonExit} onClick={Exit.bind(this)}>
          Exit
        </button>
      </Link>
      <Modal show={show} onHide={handleClose}>
        <Tabs
          defaultActiveKey="Sign in"
          transition={false}
          id="noanim-tab-example"
          className="mb-2"
          style={{ display: "-webkit-box" }}
        >
          <Tab
            eventKey="Sign in"
            title={<div className="ForTitle">Sign in</div>}
          >
            <Modal.Body>
              <Form>
                <Form.Group className={inputClassSign}>
                  <Form.Control
                    name="Login"
                    type="login"
                    placeholder="Enter your Login"
                    ref={SignLogin}
                    autoFocus
                  />
                </Form.Group>
                <Form.Group className={inputClassSign}>
                  <Form.Control
                    name="Password"
                    type="password"
                    placeholder="Enter your password"
                    ref={SignPassword}
                  />
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={signOnCabinet.bind(this)}>
                Sign in
              </Button>{" "}
            </Modal.Footer>
          </Tab>
          <Tab
            eventKey="profile"
            title={<div className="ForTitle">Create account</div>}
          >
            <div className="HeaderModalCreate">Create account using phone</div>
            <Modal.Body>
              <Form>
                <Form.Group className={inputClass}>
                  <Form.Control
                    name="Login"
                    type="login"
                    placeholder="Login"
                    autoFocus
                    ref={newLogin}
                  />
                </Form.Group>
                <Form.Group className={inputClass}>
                  <Form.Control
                    name="Password"
                    type="password"
                    placeholder="Password"
                    ref={newPassword}
                  />
                </Form.Group>
                <Form.Group className={inputClass}>
                  <Form.Control
                    name="telephone"
                    type="text"
                    placeholder="Phone number"
                    ref={newPhone}
                  />
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={registration.bind(this)}>
                Create account
              </Button>{" "}
            </Modal.Footer>
          </Tab>
        </Tabs>
      </Modal>
    </>
  );
}

export default ModalExit;
