import React from 'react';
import { Mensaje } from '../Mensaje/Mensaje'
import Item  from '../Item/Item'
import { useState } from 'react';
import { useEffect } from 'react';
import {arregloProductos} from '../../data/arregloProductos'

const Landing = () => {
    const[productos, setProductos] = useState([]);

    // Se simula una petición al servidor
    const obtenerProductos = () =>{
        return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                resolve(arregloProductos)
            },2000);
        })
    }

    // Usamos useEffect cuando esperamos el resultado de una petición
    // useEffect(funcion, arreglo) 
    useEffect(()=> {
        const resultadoObtenerProductos = async()=>{
            try {
                const listado = await obtenerProductos();
                setProductos(listado)
                console.log('listado', listado)
            } catch(error){
                console.log('Hubo un error')
            }
        }
        // 1ro se ejecuta esta función
        resultadoObtenerProductos();
    },[])

    return(
        <div className='list-container'>
            <Mensaje/>
            <div className='card-container'>
                {/* Rendering condicional */}

                {/* De esta manera yo tendría que agregar a mano cada Item, para esto usamos 'map' */}
                {/* {
                    // Condición - Se ejecuta cuando recibe al menos 1 elemento del servidor
                    productos.length>0 &&
                    <>
                        <Item item={productos[0]}/>
                        <Item item={productos[1]}/>
                        ...
                    </>
                } */}
                
                {/* map */}
                {
                    productos.map((producto)=>{
                        return(
                            <Item item={producto}/>
                        )
                    })
                }

            </div>
        </div>
    )
}

export default Landing;