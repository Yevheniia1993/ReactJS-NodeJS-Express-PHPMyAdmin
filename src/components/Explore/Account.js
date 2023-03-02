import React from "react";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import AccountSettings from "./AccountSettings";
function Account() {
  let nameAccount = localStorage.getItem("Login");
  return (
    <div className="TabContainer">
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row>
          <Col>
            <div className="account-data">
              <div className="size-image">
                <img
                  className="ForAccountImg"
                  src={localStorage.getItem("Avatar")}
                  alt=""
                />
              </div>
              <p>{nameAccount}</p>
            </div>
            <Nav variant="pills" className="flex-column">
              <Nav.Item>
                <Nav.Link eventKey="first">Account settings</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second">Downloads</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="third">Likes</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
        </Row>
        <Col sm={9}>
          <Tab.Content>
            <Tab.Pane eventKey="first" className="TabAccountSettings">
              <AccountSettings />
            </Tab.Pane>
            <Tab.Pane eventKey="second">sss</Tab.Pane>
            <Tab.Pane eventKey="third">fff</Tab.Pane>
          </Tab.Content>
        </Col>
      </Tab.Container>
    </div>
  );
}
export default Account;
