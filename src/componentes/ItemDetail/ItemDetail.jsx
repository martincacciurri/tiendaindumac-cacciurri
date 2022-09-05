import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import {useState} from "react"; 

const ItemDetail = ({productoDetalle}) => {
    const[value, setValue] = useState(0)

    console.log('Llega ',productoDetalle)
    const {nombre, precio, img, stock} = productoDetalle;

    const onAdd = (contador) => {
        alert('compraste ' + contador)
        console.log('compraste',contador)
        setValue(contador)
    }

    return(
        <div className="item-detail">
            <div className="img-container">
                <img src={img} alt=''/>
            </div>
            <div className="detail-count">
                <ItemCount nombre={nombre} stock={stock} precio={precio} initial={1} onAdd={onAdd}/>
            </div>
            
        </div>
    )
} 

export default ItemDetail