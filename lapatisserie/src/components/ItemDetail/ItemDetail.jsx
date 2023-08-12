import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import Loader from "../Loader/Loader";

const ItemDetail = () => {
  const {
    cart,
    isInCart,
    removerDelCarrito,
    vaciarCarrito,
    agregarItemACarrito,
  } = useContext(CartContext);
  const [cargando, setCargando] = useState([true]);
  const { itemId } = useParams();
  const [articulo, setItem] = useState([]);
  const [cantidad, setCantidad] = useState(1);

  const url = "https://fakestoreapi.com/products/" + itemId;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((datos) => {
        setItem(datos);
      })
      .finally(() => setCargando(false));
  }, [url]);

  const handleAgregar = () => {
    const newItem = {
      ...articulo,
      cantidad,
    };
    isInCart(newItem.id) || agregarItemACarrito(newItem);
  };
  const handleSumar = () => {
    setCantidad(cantidad + 1);
  };
  const handleRestar = () => {
    cantidad > 1 && setCantidad(cantidad - 1);
  };
  const handleRemover = () => {
    removerDelCarrito(articulo.id);
  };

  return (
    <>
      {" "}
      {cargando ? (
        <Loader />
      ) : (
        <div className="container my-5">
          <h3 className="text-primary">Id: {articulo.id} </h3>
          <h3 className="text-primary">Nombre: {articulo.title}</h3>
          <h4 className="text-secondary">Categoría: {articulo.category}</h4>
          <h5 className="text-secondary">
            Rating: {articulo.rating["rate"]} sobre {articulo.rating["count"]}{" "}
            votos.
          </h5>

          <br />
          <h2>Precio: usd {articulo.price}</h2>
          <p>{articulo.description}</p>
          <img
            src={articulo.image}
            width={130}
            height={150}
            alt={articulo.title}
          ></img>
          <br />
          <br />
          <div className="container-flex">
            <button onClick={handleAgregar} className="btn btn-primary  mx-2">
              Agregar
            </button>
            <button onClick={handleRemover} className="btn btn-secondary  mx-2">
              Remover
            </button>
            <br />
            <button className="btn   mx-2" onClick={handleRestar}>
              -
            </button>
            <span>{cantidad}</span>
            <button className="btn  mx-2" onClick={handleSumar}>
              +
            </button>
            <br />
            <button onClick={vaciarCarrito} className="btn btn-danger  mx-2">
              Vaciar Carrito
            </button>
            <Link className="btn btn-success" to="/cart">
              Terminar mi compra
            </Link>
          </div>
        </div>
      )}
    </>
  );
};
export default ItemDetail;
