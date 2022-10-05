import React from 'react';
import { Mensaje } from '../Mensaje/Mensaje'
import Item  from '../Item/Item'
import { useState } from 'react';
import { useEffect } from 'react';
import {arregloProductos} from '../../data/arregloProductos'

const Landing = () => {
    const[productos, setProductos] = useState([]);

    const obtenerProductos = () =>{
        return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                resolve(arregloProductos)
            },2000);
        })
    }

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
        resultadoObtenerProductos();
    },[])

    return(
        <div className='list-container'>
            <Mensaje/>
            <div className='card-container'>
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