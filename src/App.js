import "./App.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Routing from "./components/Explore/Router";

function App() {
  return (
    <div>
      <Navbar variant="dark" bg="dark" expand="lg">
        <Container fluid>
          <Navbar.Brand href="http://localhost:3000/">
            <img className="logoClass" src="./imagesMusic/logo.jpeg" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-dark-example" />
          <Navbar.Collapse id="navbar-dark-example">
            <Nav>
              <NavDropdown
                id="nav-dropdown-dark-example"
                title="Explore"
                menuVariant="dark"
              >
                <NavDropdown.Item href="http://localhost:3000/Explore">
                  Explore
                </NavDropdown.Item>
                <NavDropdown.Item href="http://localhost:3000/Samples">
                  Samples
                </NavDropdown.Item>
                <NavDropdown.Item href="http://localhost:3000/Packs">
                  Packs
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="http://localhost:3000/Selections">
                  Selections
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Routing />
    </div>
  );
}

export default App;
