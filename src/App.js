import { useState } from 'react';
import './App.css';
import NavBar from './componentes/NavBar/NavBar';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import {Contador} from './componentes/Contador/Contador';
import {Carrito} from './componentes/Carrito/Carrito';


function App() {
  const [numeroProductos, setNumeroProductos] = useState(0);


  const agregar = (productos) =>{
    console.log('Función agregar', productos);
    setNumeroProductos(productos);
  }

  console.log('numeroProductos', numeroProductos)

  return (
    <div className="App">
      <header className="App-header">
        <NavBar></NavBar> 
      </header>
      <ItemListContainer greeting="Esta es la propiedad greeting"/>
      <Contador stock={10} initial={1} agregarProducto={agregar}/>
      <Carrito numeroCarrito={numeroProductos}/>
    </div>
  );
}

export default App;
