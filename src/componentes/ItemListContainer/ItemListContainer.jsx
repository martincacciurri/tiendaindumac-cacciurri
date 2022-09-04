import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList'
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import PulseLoader  from "react-spinners/PulseLoader";
import {arregloProductos} from '../../data/arregloProductos'

const ItemListContainer = () =>{
    const {categoria} = useParams();
    console.log(useParams());

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    const getFetch = new Promise((resolve,reject) => {
        setTimeout(()=> {
            resolve(arregloProductos)
            reject(err => console.log(err))
        },2000)
    })

    useEffect(()=>{
        getFetch.then(resultado=>{
            if(!categoria){
                setProductos(resultado)
            }else{
                const nuevaLista = resultado.filter(item=>item.categoria === categoria)
                console.log('categoriasssss', nuevaLista)
                setProductos(nuevaLista) 
            }
            
            setLoading(false)
        })
    },[categoria])

    // const titulo = ((tit)=>{
    //     if (categoria == null){
    //         return titulo = categoria[0].toUpperCase() + categoria.substring(1) +"s"
    //     }else{
    //         return titulo = 'Productos'
    //     }
    // })
    
    

    return(
        <div className='item-list-container'>
            <h1 className='section-title'>Productos</h1>
                {
                    loading ? 
                    
                    <PulseLoader cssOverride={{}}/>
                    
                    :
                <div className='item-list-container'>
                    <ItemList items={productos}/>
                </div>
            }
        </div>       
    )
}

export default ItemListContainer