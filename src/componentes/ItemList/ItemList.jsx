import './ItemList.css'
import {useState, useEffect} from 'react'
import getFetch from '../../data/arregloProductos.js'
import Item from '../Item/Item'


const ItemList = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        getFetch.then(data=>{
            setData(data)
            setLoading(false)
        })
    },[])

    return(
        <>
            <h1 className='section-title'>Productos</h1>
            {
                loading ? <h2>Cargando...</h2>
                :
                <div className='grid-product-container'>
                    <div className='grid-product'>
                        {data.map(data =>(
                            <Item key={data.id} data={data}/>
                        ))}
                    </div>
                </div>
                
            }
        </>
    )
}



export default ItemList;