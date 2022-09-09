import React, { useState,useEffect } from 'react';
import './App.css';
import NavBar from './componentes/NavBar/NavBar';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';
import PaginaServicioTecnico from './componentes/PaginaServicioTecnico/PaginaServicioTecnico'
import PaginaEventos from './componentes/PaginaEventos/PaginaEventos'
import EventosReact from './componentes/EventosReact/EventosReact'
import PaginaError from './componentes/PaginaError/PaginaError'
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import CartContainer from './componentes/CartContainer/CartContainer'
import { CartProvider } from './context/CartContext'

function App(){
  return (
    <CartProvider>
      <BrowserRouter>
          <div className="App">
            <>  
                <NavBar/> 
                <Routes>
                  <Route exact path='/' element={<ItemListContainer/>}/>
                  <Route exact path='/productos' element={<ItemListContainer/>}/>
                  <Route exact path='/serviciotecnico' element={<PaginaServicioTecnico/>}/>
                  <Route exact path='/categoria/:categoria' element={<ItemListContainer/>}/>
                  <Route exact path='/item/:id' element={<ItemDetailContainer/>}/>
                  <Route exact path='/item/:id' element={<ItemDetailContainer/>}/>

                  <Route exact path='/eventos' element={<PaginaEventos/>}/>

                  <Route exact path='/eventos-react' element={<EventosReact/>}/>

                  <Route exact path='/cart' element={<CartContainer/>}/>

                  // Cuando el usuario se dirija a una pagina que no existe
                  <Route path='*' element={<ItemListContainer/>} />

                </Routes>
              {/* <ItemDetailContainer/>    */}
            </>         
          </div>
          </BrowserRouter>
    </CartProvider>  
    
  );
}

export default App;
