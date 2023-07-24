import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const ItemDetail = () => {
    
    const {itemId} = useParams()
    const [articulo, setItem] = useState([])
    const url = "https://fakestoreapi.com/products/" + itemId
    useEffect(()=> { 
        fetch(url)
                .then(res=>res.json())
                .then((datos)=> {setItem(datos)})
        },[url])
    
       return(
        <div className="container my-5">
              <h3 className="text-primary">Id: {articulo.id} </h3>
              <h3 className="text-primary">Nombre: {articulo.title}</h3>
              <h4 className="text-secondary">Categoría: {articulo.category}</h4>
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
              <button className="btn btn-success"> Agregar</button>
        </div>
        
    )
}
export default ItemDetail