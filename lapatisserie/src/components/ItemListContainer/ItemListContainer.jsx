import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";


export const ItemListContainer = (props) => {
  const [cargando, setCargando] = useState([true]);
  const [datos, setDatos] = useState([]);

  useEffect(() => {
    setCargando(true);
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((datos) => setDatos(datos))
      .finally(() => setCargando(false));
  }, []);

  return (
    <>
    <Container className="container  ">
      <Row className="row inline-block">
        {cargando ? (
          <h2>cargando</h2>
        ) : (
          datos.map((articulo) => (
            <Col className="col " key={articulo.id}>
              <h3 className="text-primary">{articulo.title}</h3>
              <h4 className="text-secondary">{articulo.category}</h4>
              <h4> U$D {articulo.price}</h4>
              <p className="text-secondary   "> {articulo.description}</p>
              <img
                src={articulo.image}
                width={250}
                height={250}
                alt={articulo.title}
              ></img>
            </Col>
          ))
        )}
      </Row>
    </Container>
    </>
  );
};
