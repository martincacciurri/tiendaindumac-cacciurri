import './Item.css'
import React from "react"

const Item = ({data}) =>{
    return(
        <div>
             <div className='card' key={data.id}>
                <div >
                    <img src={data.img} alt="" className="card-img"/>
                </div>
                
                <h1 className='card-description'>{data.nombre}</h1>
                <h2 className='card-price'>$ {data.precio}</h2>
                <div className='card-button'>
                    <button className='btn-card'>Ver detalle</button>
                </div>
                
                {/* <p>{item.nombre}</p>
                <p>Nro Likes</p>
                <button onClick={incrementar}>+</button> */}
            </div>
        </div>
    )
}

export default Item