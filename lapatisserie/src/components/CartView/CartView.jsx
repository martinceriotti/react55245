import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const CartView = () => {
  const { cart, totalCompra, vaciarCarrito, removerDelCarrito } =
    useContext(CartContext);
  if (cart.length === 0) {
    return (
      <div className="container my-2">
        <h3 className="text-4xl">Su Carro no contiene Elementos.</h3>
        <Link to="/" className="btn btn-success">
          Volver
        </Link>
      </div>
    );
  }

  return (
    <div className="container my-2">
      <h2>Artículos en el Carro: </h2>
      <hr />
      {cart.map((articulo) => (
        <div key={articulo.id}>
          <h3>{articulo.title}</h3>
          <img
            src={articulo.image}
            width={130}
            height={150}
            alt={articulo.title}
          ></img>
          <p>Precio: ${articulo.price * articulo.cantidad}</p>
          <p>Cantidad: {articulo.cantidad}</p>
          <button
            onClick={() => removerDelCarrito(articulo.id)}
            className="btn btn-danger"
          >
            {" "}
            Remover{" "}
          </button>
          <hr />
        </div>
      ))}

      <div>
        <h4 className="text-3xl my-2">Total Compra: ${totalCompra()}</h4>
        <button onClick={vaciarCarrito} className="btn btn-danger">
          Vaciar carrito
        </button>
        <Link className="btn btn-success mx-2" to="/checkout">
          Terminar mi compra
        </Link>
      </div>
    </div>
  );
};

export default CartView;
