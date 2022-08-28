// import { useState } from 'react';
import './App.css';
import NavBar from './componentes/NavBar/NavBar';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';

function App() {


  // console.log('numeroProductos', numeroProductos)

  return (
    <div className="App">
      <header className="App-header">
        <NavBar></NavBar> 
      </header>
      <ItemListContainer/>
      <ItemDetailContainer/>      
    </div>
  );
}

export default App;
