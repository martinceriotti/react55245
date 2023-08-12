import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

const init = JSON.parse(localStorage.getItem("cart")) || [];

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(init);
  const [cantCarro, setCantCarro] = useState(0);

  const agregarItemACarrito = (item) => {
    setCart([...cart, item]);
    setCantCarro(cantCarro + 1);
  };
  const removerDelCarrito = (id) => {
    setCart(cart.filter((item) => item.id !== id));
    setCantCarro(cantCarro - 1);
  };
  const isInCart = (id) => {
    return cart.some((item) => item.id === id);
  };
  const totalCantidad = () => {
    return cart.reduce((acc, item) => acc + item.cantidad, 0);
  };
  const totalCompra = () => {
    return cart.reduce((acc, item) => acc + item.price * item.cantidad, 0);
  };
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const vaciarCarrito = () => {
    setCart([]);
    setCantCarro(0);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        agregarItemACarrito,
        isInCart,
        totalCompra,
        vaciarCarrito,
        totalCantidad,
        removerDelCarrito,
        cantCarro,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
