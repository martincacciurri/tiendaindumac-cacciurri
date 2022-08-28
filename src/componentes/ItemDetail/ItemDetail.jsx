import { useState, useEffect } from "react";
import getFetch from "../../data/arregloProductos";
import './ItemDetail.css'
import PulseLoader  from "react-spinners/PulseLoader";

const ItemDetail = () => {
    const [data, setData] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        getFetch
        .then(response => {
            setData(response.find(prod => prod.id === 1))
            setLoading(false)
        })
    })

    console.log(data)
    return(
        <div className="item-container">
            <h1 className='section-title'>Detalle de producto</h1>
            {
                loading ? 
                
                <PulseLoader cssOverride={{}}/>

                :
                <div className="item-detail">
                    <div className="img-container">
                        <img src={data.img} alt=''/>
                    </div>
                    <div className="detail">
                        <h2>{data.nombre}</h2>
                        <h3>$ {data.precio}</h3>
                        <p>{data.descripcion}</p>
                        {/* <h4>{data.garantia}</h4>
                        <p>{data.categoria}</p> */}
                    </div>
                    
                </div>
            }

        </div>
    )


} 


export default ItemDetail