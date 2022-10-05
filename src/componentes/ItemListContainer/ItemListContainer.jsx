import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList'
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import PulseLoader  from "react-spinners/PulseLoader";
import {arregloProductos} from '../../data/arregloProductos'
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../utils/firebase";

const ItemListContainer = () =>{
    const {categoria} = useParams();

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(()=>{

        const getData = async() => {
            try {
                let queryRef = !categoria? collection(db,"items") : query(collection(db,'items'),where("categoria","==",categoria))
                const response = await getDocs(queryRef);
                const datos = response.docs.map(doc=>{
                    const newDoc = {
                        ...doc.data(),
                        id:doc.id
                    }
                    return newDoc
                })                
                setProductos(datos)
                setLoading(false)
            }
            catch(error){
                console.log("Error al cargar data base", error)
            }
        }
        getData();
    },[categoria])

    console.log("Productos", productos)

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