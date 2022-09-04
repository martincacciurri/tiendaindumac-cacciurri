import React, { useState,useEffect } from 'react';
import './App.css';
import NavBar from './componentes/NavBar/NavBar';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';
import PaginaServicioTecnico from './componentes/PaginaServicioTecnico/PaginaServicioTecnico'
import PaginaError from './componentes/PaginaError/PaginaError'
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'

function App(){
  return (
    <BrowserRouter>
    <div className="App">
      <>
          <NavBar></NavBar> 
          <Routes>
            <Route exact path='/productos' element={<ItemListContainer/>}/>
            <Route exact path='/serviciotecnico' element={<PaginaServicioTecnico/>}/>
            <Route exact path='/categoria/:categoria' element={<ItemListContainer/>}/>
            <Route exact path='/item/:id' element={<ItemDetailContainer/>}/>
            // Cuando el usuario se dirija a una pagina que no existe
            <Route path='*' element={<ItemListContainer/>} />

          </Routes>
        {/* <ItemDetailContainer/>    */}
      </>         
    </div>
    </BrowserRouter>
  );
}

export default App;
