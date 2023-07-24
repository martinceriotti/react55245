import { useEffect, useState } from "react";
import { Col, Row, Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import { json, useParams, Link } from "react-router-dom"



export const ItemListContainer = () => {
  const [cargando, setCargando] = useState([true]);
  const [datos, setDatos] = useState([]);
  const {categoriaId} = useParams()
  const url = categoriaId ? "https://fakestoreapi.com/products/category/"  + categoriaId : "https://fakestoreapi.com/products"

  useEffect(() => {
    setCargando(true);
    fetch(url)
      .then((res) => res.json())
      // .then((datos) => categoriaId? setDatos(datos.filter(prod => prod.category === categoriaId)):setDatos(datos))
      .then((datos) => setDatos(datos))
      .finally(() => setCargando(false));
  }, [url]);

  return (
    <>
    <Container className="container  ">
      <Row className="row inline-block">
        {cargando ? (
          <h2>cargando</h2>
        ) : (
          datos.map((articulo) => (
            <Col className="col-4 " key={articulo.id}>
              <h3 className="text-primary">{articulo.title}</h3>
              
              <h4 className="text-secondary">{articulo.category}</h4>
              <img
                src={articulo.image}
                width={130}
                height={150}
                alt={articulo.title}
              ></img>
              <div></div>
              <Link to={`/detail/${articulo.id}`} className="btn btn-success"> Ver Mas..</Link>
            </Col>
            
          ))
        )}
      </Row>
    </Container>
    </>
  );
};
