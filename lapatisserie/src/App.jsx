import { BrowserRouter , Routes, Route} from 'react-router-dom';
import { Header } from './components/Header/Header'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import 'bootstrap/dist/css/bootstrap.min.css';
import Contacto from "./components/Contacto/Contacto"
import ItemDetail from './components/ItemDetail/ItemDetail';

function App() {
   return (
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<ItemListContainer/>}/>
          <Route path="/contacto" element={<Contacto/>}/>
          <Route path="/productos/:categoriaId" element={<ItemListContainer/>}/>
          <Route path="/detail/:itemId" element={<ItemDetail/>}/>
          <Route path="*" element={<h2>Pagina No Encontrada</h2>}/>
        </Routes>
      </BrowserRouter>
  )
}

export default App