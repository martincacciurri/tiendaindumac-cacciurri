import { useState } from 'react';
import './ItemListContainer.css';
import {ItemCount} from '../ItemCount/ItemCount'
import {Carrito} from '../Carrito/Carrito';

function ItemListContainer(props){
    const [numeroProductos, setNumeroProductos] = useState(0);


    const agregar = (productos) =>{
      console.log('Función agregar', productos);
      setNumeroProductos(productos);
    }
   
   
    return(
        <>
        <h1>{props.greeting}</h1>
        <div className='productos-card'>
            <ItemCount stock={5} initial={1} precio={10000} agregarProducto={agregar}/>
            <ItemCount stock={5} initial={1} precio={30000} agregarProducto={agregar}/>
            <ItemCount stock={5} initial={1} precio={20000} agregarProducto={agregar}/>
            <ItemCount stock={5} initial={1} precio={40000} agregarProducto={agregar}/>
        </div>
        
        <Carrito numeroCarrito={numeroProductos}/>
        </>
       

    )
}

export default ItemListContainer;