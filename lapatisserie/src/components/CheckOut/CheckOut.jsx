import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { db } from "../../firebase/config";
import { collection, addDoc } from "firebase/firestore";
import { Link } from "react-router-dom";

const CheckOut = () => {
  const { cart, totalCompra, vaciarCarrito } = useContext(CartContext);
  const [cargando, setCargando] = useState([true]);
  const [idOrden, setidOrden] = useState(null);
  // La convención en react es trabajar con estados para guardar los valores del formulario
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [apellido, setApellido] = useState("");
  const [ordenId, setOrdenId] = useState(null);
  const handleNombre = (e) => {
    setNombre(e.target.value);
  };
  const handleApellido = (e) => {
    setApellido(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("");
    setCargando(true);
    const orden = {
      articulos: cart.map((articulo) => ({
        id: articulo.id,
        precio: articulo.price,
        cantidad: articulo.cantidad,
      })),
      nombre: nombre,
      apellido: apellido,
      email: email,
      total: totalCompra(),
      fecha: new Date(),
    };

    const orderRef = collection(db, "ordenes");
    addDoc(orderRef, orden).then((doc) => {
      setOrdenId(doc.id);
      vaciarCarrito();
    });
  };
  if (ordenId) {
    return (
      <div className="container my-2">
        <p>
          {" "}
          Tu compra fue exitosa. Id de orden:<b> {ordenId}</b>
        </p>
        <Link className="btn btn-success mx-2" to="/">
          Volver
        </Link>
      </div>
    );
  }
  return (
    <div className="container mx-4">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email:</label>
          <input
            value={email}
            onChange={handleEmail}
            type="email"
            className="form-control"
            id="email"
            placeholder="Ingrese su correo"
          />
        </div>
        <div className="form-group">
          <label>Nombre</label>
          <input
            value={nombre}
            onChange={handleNombre}
            type="Nombre"
            className="form-control"
            id="Nombre"
            placeholder="Nombre"
          />
        </div>
        <div className="form-group">
          <label>Apellido</label>
          <input
            value={apellido}
            onChange={handleApellido}
            type="Apellido"
            className="form-control"
            id="Apellido"
            placeholder="Apellido"
          />
        </div>
        <br />
        <button type="submit" className="btn btn-primary">
          Finalizar
        </button>
      </form>
    </div>
  );
};
export default CheckOut;
