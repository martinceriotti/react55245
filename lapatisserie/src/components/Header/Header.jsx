import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import { Link } from 'react-router-dom';
import Container from "react-bootstrap/Container";

export const Header = () => {
  return (
    <Container className="container">
      <Row className="">
        <Nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Nav.Item>
            <Link className="nav-link" to="/"> Inicio </Link>
          </Nav.Item>
          <Nav.Item>
            <Link className="nav-link" to="/productos/electronics">Electronica</Link>
          </Nav.Item>
          <Nav.Item>
            <Link className="nav-link"  to="/productos/jewelery">Joyas</Link>
          </Nav.Item>
          <Nav.Item>
            <Link className="nav-link"  to="/productos/men's clothing">Ropa Masculina</Link> 
          </Nav.Item>
          <Nav.Item>
            <Link className="nav-link"  to="/productos/women's clothing">Ropa Femenina</Link>
          </Nav.Item>
          <Nav.Item>
            <Link className="nav-link" to="Contacto">Contacto</Link>
          </Nav.Item>
          <Nav.Item>
            <div className="container">
                <a href="">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-cart3"
                    viewBox="0 0 16 16"
                >
                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                </svg>
                </a>
            </div>
          </Nav.Item>
        </Nav>
      </Row>
    </Container>
  );
};
