import React, { useState, useEffect } from "react"; 
import ItemDetail from '../ItemDetail/ItemDetail'
import PulseLoader  from "react-spinners/PulseLoader";
import { useParams } from 'react-router-dom';
import './ItemDetailContainer.css'

import { doc, getDoc } from "firebase/firestore"
import { db } from "../../utils/firebase"

const ItemDetailContainer = () => {
    const [productoDetalle, setProductoDetalle] = useState({})
    const [loading, setLoading] = useState(true)
    const {id} = useParams();

    useEffect(()=>{
        const queryRef = doc(db, "items", id)
        getDoc(queryRef).then(response =>{
            const newDoc = {
                ...response.data(),
                id:response.id
            }
            console.log(newDoc)
            setProductoDetalle(newDoc)
        }).catch(error=>console.log(error))            
            setLoading(false)
    },[id])

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