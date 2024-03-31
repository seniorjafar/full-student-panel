import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link, NavLink } from "react-router-dom";
import { useAuth } from "./Auth";

const Header = () => {
  const { user } = useAuth();
  if (user) {
    return (
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
        <Container>
          <Link to="/">
            <Navbar.Brand>BREND</Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <NavLink to="/">
                <Nav.Link as="span">Home</Nav.Link>
              </NavLink>
              <NavLink to="/posts">
                <Nav.Link as="span">Posts</Nav.Link>
              </NavLink>
              <NavLink to="/about">
                <Nav.Link as="span">About</Nav.Link>
              </NavLink>
              <NavLink to="/contact">
                <Nav.Link as="span">Contact</Nav.Link>
              </NavLink>
              {user ? (
                <NavLink to="/profile">
                  <Nav.Link as="span">{user.username}</Nav.Link>
                </NavLink>
              ) : (
                <NavLink to="/login">
                  <Nav.Link as="span">Login</Nav.Link>
                </NavLink>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
};

export default Header;
