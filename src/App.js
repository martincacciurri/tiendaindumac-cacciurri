import { useState } from 'react';
import './App.css';
import NavBar from './componentes/NavBar/NavBar';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';



function App() {


  // console.log('numeroProductos', numeroProductos)

  return (
    <div className="App">
      <header className="App-header">
        <NavBar></NavBar> 
      </header>
      <ItemListContainer greeting="Esta es la propiedad greeting"/>
      
      
    </div>
  );
}

export default App;
