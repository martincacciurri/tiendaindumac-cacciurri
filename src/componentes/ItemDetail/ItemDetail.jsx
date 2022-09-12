import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { useContext } from 'react';
import CartContext from '../../context/CartContext';
import {Link, NavLink} from 'react-router-dom'
import { useState } from "react";

const ItemDetail = ({productoDetalle}) => {
    const {addProduct} = useContext(CartContext);
    const [cantidadComprada, setCantidadComprada] = useState(0)

    // console.log('Llega ',productoDetalle)
    const {nombre, precio, img, stock} = productoDetalle;

    const onAdd = (contador) => {
        // console.log('compraste',contador)
        const newProduct = {...productoDetalle, quantity:contador}
        // console.log('newProduct', newProduct)
        addProduct(newProduct, contador)
        setCantidadComprada(contador)
    }

    return(
        <div className="item-detail">
            <div className="img-container">
                <img src={img} alt=''/>
            </div>
            <div className='detalle-producto'>
                <div>
                    <h1>{nombre}</h1>
                    <h2>$ {precio}</h2> 
                </div>
            {
                cantidadComprada === 0 
                ?
                <div className="detail-count">
                    <ItemCount nombre={nombre} stock={stock} precio={precio} initial={1} onAdd={onAdd}/>
                </div>
                :
                <div className='botones-after-agregar'>
                    <Link to="/">
                        <button className="btn btn-secondary">Seguir comprando</button>
                    </Link>
                    <Link to="/Cart">
                        <button className="btn btn-success">Finalizar compra</button>
                    </Link>
                </div>
            }
            </div>
        </div>
    )
} 

export default ItemDetail