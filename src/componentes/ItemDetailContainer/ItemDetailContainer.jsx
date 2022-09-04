import React, { useState, useEffect } from "react"; 
import ItemDetail from '../ItemDetail/ItemDetail'
import PulseLoader  from "react-spinners/PulseLoader";
import {getFetch} from '../../data/arregloProductos'
import { useParams } from 'react-router-dom';
import './ItemDetailContainer.css'

const ItemDetailContainer = () => {
    const [productoDetalle, setProductoDetalle] = useState({})
    const [loading, setLoading] = useState(true)
    const {id} = useParams();
    console.log('Llega por parametro a ItemDetailContainer: ', id)
    
    // const getFetch = new Promise((resolve,reject) => {
    //         resolve(arregloProductos)
    //         reject(err => console.log(err))
    // })

    console.log('get fecth', getFetch)

    useEffect(()=>{
        getFetch.then(resultado=>{
            if(!id){
                setProductoDetalle(resultado)
            }else{
                const nuevaLista = resultado.find(item=>item.id === parseInt(id))
                console.log('idssssssss', nuevaLista)
                setProductoDetalle(nuevaLista) 
            }
            
            setLoading(false)
        })
    },[id])

    // useEffect(()=>{
    //     getFetch
    //     .then((res)=> setProductoDetalle(res.find((item)=> item.id === id)))
    //     .catch((error)=> console.log(error))
    //     .finally(()=> setLoading(false))
    // },[id])


    console.log(productoDetalle)

    return(
        <div className='item-detail-container'>
            {
                loading ?

                <PulseLoader cssOverride={{}}/>
                
                :
                
                <ItemDetail productoDetalle={productoDetalle}/>
                
            }
            
        </div>
    )
}

export default ItemDetailContainer