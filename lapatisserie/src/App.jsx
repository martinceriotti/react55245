import { Header } from './components/Header/Header'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
   return (
      <>
        <Header/>
        <ItemListContainer mensaje = " viva la pepa "/>
      </>
  )
}

export default App